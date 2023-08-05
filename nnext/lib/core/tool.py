#!/usr/bin/env python

__authors__ = ["Peter W. Njenga"]
__copyright__ = "Copyright © 2023 NNext, Co."

# Standard Libraries
import asyncio
import inspect
from os import environ as env
import hashlib
from abc import ABCMeta, abstractmethod
from collections.abc import Callable
import json
from datetime import datetime, timezone
from pprint import pprint, pformat

# External Libraries
import redis
from loguru import logger

# Internal Libraries
from nnext.lib.core.decor import with_cache

# Global Variables
CACHE_EXPIRATION_DURATION = 60 * 60 * 24 * 90 # 90 days
TASK_EXPIRATION_DURATION = 60 * 60 * 24 * 2 # 48 Hours

REDIS_STREAM_HOST=env.get('REDIS_STREAM_HOST', "localhost")
REDIS_CACHE_HOST=env.get('REDIS_CACHE_HOST', "localhost")
REDIS_PASSWORD=env.get('REDIS_PASSWORD')
red_stream = redis.StrictRedis(
    REDIS_STREAM_HOST, 6379, charset="utf-8",
    password=REDIS_PASSWORD, decode_responses=True)
red_cache = redis.StrictRedis(
    REDIS_STREAM_HOST, 6379, charset="utf-8",
    password=REDIS_PASSWORD, decode_responses=True)
# ------------------------------

def _hasattr(C, attr):
    return any(attr in B.__dict__ for B in C.__mro__)

class _AbstractClass(metaclass=ABCMeta):
    __required_attributes__ = frozenset()

    @abstractmethod
    def run(self):
        pass

class CallableDFColumnTool(_AbstractClass, Callable):
    def __init__(self, func, name, *args, **kwargs):
        self.func = func
        self.tool_name = name
        self.instream_key = f"nnext::instream::tool->{self.tool_name}"
        self.last_processed_stream_key = f"{self.instream_key}::processed_pointer"
        self.last_processed_message_id = red_stream.get(self.last_processed_stream_key)
        logger.debug(f"Instream key: {self.instream_key}")
        logger.debug(f"Last processed message id: {self.last_processed_message_id}")

    def get_last_processed_message_id(self):
        last_processed_message_id = red_stream.get(self.last_processed_stream_key)
        if last_processed_message_id is None:
            last_processed_message_id = "0-0"

        return last_processed_message_id

    def set_last_processed_message_id(self, message_id):
        last_processed_message_id = self.get_last_processed_message_id()

        old_ts, old_seq = last_processed_message_id.split("-")
        old_ts, old_seq = int(old_ts), int(old_seq)

        new_ts, new_seq = message_id.split("-")
        new_ts, new_seq = int(new_ts), int(new_seq)

        if new_ts >= old_ts:
            last_processed_message_id = message_id
        elif new_ts == old_ts and new_seq >= old_seq:
            last_processed_message_id = message_id
        else:
            print("!!!")
            exit(3)

        red_stream.set(self.last_processed_stream_key, last_processed_message_id)

        return last_processed_message_id

    @with_cache(prefix="nnext::fn-cache::agent-run::openai_chat", ex=CACHE_EXPIRATION_DURATION)
    async def run_func(self, *args, **kwargs):
        cache_key = f"nnext::fn-cache::agent-run::tool->{self.tool_name}"
        return await self.func(*args)

    async def wait_func_inner(self, *args, **kwargs):
        last_processed_message_id = self.get_last_processed_message_id()
        l = red_stream.xread(count=3, streams={self.instream_key: last_processed_message_id}, block=1000)

        for _k in l:
            stream_key, stream_messages = _k
            for _j in stream_messages:
                message_id, message_data = _j

                correlation_id = message_data.get('correlation_id')
                payload = json.loads(message_data.get('payload'))
                agent = message_data.get('agent')

                arg_names = inspect.getfullargspec(self.func)[0]
                kwarg_names = inspect.getfullargspec(self.func)[2]

                args = [payload.get(arg_name, None) for arg_name in arg_names]
                args_dict = {arg_name: payload.get(arg_name, None) for arg_name in arg_names}

                arg_dict_str = json.dumps(args_dict, sort_keys=True)
                arg_dict_hash = hashlib.sha256(arg_dict_str.encode('utf-8')).hexdigest()
                self.last_instream_key = message_id

                read_cache = True
                write_cache = True
                cache_key = f"nnext::cache::agent-run::tool->{self.tool_name}::elem->{arg_dict_hash}"
                # read_cache = kwargs.get('read_cache', True)
                # write_cache = kwargs.get('write_cache', True)

                if read_cache:
                    cache_val = red_cache.get(cache_key)

                    if cache_val:
                        print(cache_val)
                        logger.debug('Found element in cache - returning cached results')
                        try:
                            result_dict = json.loads(cache_val)
                        except Exception as e:
                            print(e)
                    else:
                        logger.info('No cache found or skipping cache - running agent')

                        try:
                            start_time = datetime.now(timezone.utc)
                            tool_result = await self.func(*args)
                            end_time = datetime.now(timezone.utc)
                            result_dict = {
                                "payload": {"result": tool_result},
                                "status": "SUCCESS",
                                "start_time": start_time,
                                "end_time": end_time,
                            }
                        except Exception as e:
                            logger.exception(e)

                            result_dict = {
                                "payload": {"error": str(e)},
                                "status": "ERROR",
                            }
                        finally:
                            if write_cache:
                                red_cache.set(
                                    cache_key,
                                    json.dumps(result_dict, default=str),
                                    ex=CACHE_EXPIRATION_DURATION
                                )

                res_stream_key = f"nnext::outstream::agent->{agent}::tool->{self.tool_name}"
                red_stream.xadd(res_stream_key, {
                    'payload': json.dumps(result_dict, default=str),
                    'correlation_id': correlation_id,
                })
                self.set_last_processed_message_id(message_id)
                # red_stream.xdel(stream_key, message_id)

        return None

    async def wait_func(self, *args, **kwargs):
        while True:
            await self.wait_func_inner()

    def run(self, *args, **kwargs):
        logger.debug("Running CallableDFColumnTool", *args, **kwargs)
        self.new_event_loop = asyncio.new_event_loop()
        try:
            self.new_event_loop.run_until_complete(self.wait_func())
        except redis.exceptions.ConnectionError as redis_connection_error:
            pass
            logger.critical(f"Redis connection error: {redis_connection_error}. Is Redis running and variable 'REDIS_STREAM_HOST' set?")
        finally:
            self.new_event_loop.close()

    def __call__(self, func):
        logger.info("!!! TODO: REMOVE Initialized on first call", func)

class ToolDecor(object):
    def __init__(self, name, invoke_commands, *args, **kwargs):
        self.name = name
        self.invoke_commands = invoke_commands
        self.with_cache = kwargs.get('with_cache', True)
        logger.info(f"Initializing Tool: [name='{name}' invoke_commands='{invoke_commands}']")

    def __call__(self, func):
        logger.info(f"Running Tool event loop for [name={self.name}]", func)
        c = CallableDFColumnTool(func, name=self.name, invoke_commands=self.invoke_commands)

        return c