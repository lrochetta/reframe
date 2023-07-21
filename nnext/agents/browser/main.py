#!/usr/bin/env python

__authors__ = ["Peter W. Njenga"]
__copyright__ = "Copyright © 2023 NNext, Co."

# Standard Libraries
import json
import os
from time import time
import logging
from pprint import pprint
from datetime import datetime, timezone

# External Libraries
import psycopg
import asyncio
from playwright.async_api import async_playwright
import redis
import dask
from uuid6 import uuid7

# Internal Libraries
None

# Global Variables
META_DB_HOST = os.environ.get("META_DB_HOST")
META_DB_PASS = os.environ.get("META_DB_PASS")
META_DB_USER = os.environ.get("META_DB_USER")
META_DB_URL = f"postgresql://{META_DB_USER}:{META_DB_PASS}@{META_DB_HOST}/nnext"

BRIGHT_DATA_KEY = os.environ.get("BRIGHT_DATA_KEY")
browser_url = f'wss://{auth}@brd.superproxy.io:9222'
node_id = "0189248c-c8cb-754c-b51c-dd58b692f6a6"
node_short_code = node_id.split("-")[-2]
node_name = "browser"

REDIS_STREAM_HOST=os.environ.get('REDIS_STREAM_HOST', "localhost")
REDIS_CACHE_HOST=os.environ.get('REDIS_CACHE_HOST', "localhost")
red_stream = redis.StrictRedis(REDIS_STREAM_HOST, 6379, charset="utf-8", decode_responses=True)
red_cache = redis.StrictRedis(REDIS_CACHE_HOST, 6379, charset="utf-8", decode_responses=True)

CACHE_DURATION = 60 * 60 * 24 * 90 # 90 days

async def visit_url(url, elem_id, *args, **kwargs):
    read_cache = kwargs.get('read_cache', True)
    write_cache = kwargs.get('write_cache', True)
    cache_key = f"agent-run-{node_name}-{node_short_code}-elem_id:{elem_id}"
    cache_val = red_cache.get(cache_key)
    print(f"cache_key: {cache_key}")

    if read_cache and cache_val:
        print('Found element in cache - returning cached results')
        try:
            cache_results = json.loads(cache_val)
            return cache_results
        except Exception as e:
            print(e)
    else:
        print('No cache found or skipping cache - running agent')

    async with async_playwright() as pw:
        start_time = datetime.now(timezone.utc)
        print(f'connecting to browser');
        browser = await pw.chromium.connect_over_cdp(browser_url)
        print('connected  to browser');
        page = await browser.new_page()

        print(f'visiting {url}')
        try:
            await page.goto(url, timeout=120000)
        except Exception as e:
            cache_elem = {
                "elem_id": elem_id,
                "payload": {"error": str(e)},
                "status": "ERROR__PAGELOAD",
            }

            if write_cache:
                red_cache.set(
                    cache_key,
                    json.dumps(cache_elem),
                    ex=CACHE_DURATION
                )
            logging.exception(logging)
            return None

        await page.screenshot(path=f"{id}-screenshot.png")

        texts = await page.locator('div').all_inner_texts()

        await browser.close()

    cache_elem = {
        "elem_id": elem_id,
        "payload": {"texts": texts},
        "status": "SUCCESS",
    }

    if write_cache:
        red_cache.set(
            cache_key,
            json.dumps(cache_elem),
            ex=CACHE_DURATION
        )

    return texts

    # # Technically, the node should return now. 🔙🔙🔙
    # # The remaining code belongs to the node harness.
    #
    # task_id = str(uuid7())
    #
    # # set the keys in redis. Keys expire after 3 months.
    # redis_key = f"agent-run-{node_name}-{node_short_code}-task:{task_id}"
    #
    # key_exp = 60 * 60 * 24 * 14 # Two weeks
    # red.set(redis_key, str(texts), ex=key_exp)
    # print(f"Setting redis key {redis_key} to result cache")
    #
    # # Send the results to the OpenAI Agent
    # openai_node_id = "01891803-f280-775f-99c9-36b1750b872f"
    # openai_node_short_code = openai_node_id.split("-")[-2]
    # openai_node_name = "openai-chat-context"
    # openai_stream_key= f"{openai_node_name}-{openai_node_short_code}"
    #
    # stream_message = {
    #     'ts': time(),
    #     'payload': json.dumps(str(texts)),
    #     'job_id': job_id
    # }
    # red.xadd(openai_stream_key, stream_message)
    #
    # with psycopg.connect(META_DB_URL) as meta_db_conn:
    #
    #         meta_db_conn.execute(
    #             """
    #             INSERT INTO agent.node_run (id, node_id, start_time, end_time, results, job_id)
    #             VALUES (%(id)s, %(flow_run_id)s, %(workspace_id)s, %(start_time)s, %(end_time)s, %(results)s, %(job_id)s);
    #             """,
    #             {
    #                 "id": task_id,
    #                 "node_id": node_id,
    #                 "start_time": start_time,
    #                 "end_time": datetime.now(timezone.utc),
    #                 "results": json.dumps(texts),
    #                 "job_id": job_id
    #             }
    #         )

    # return texts

def run_task():
    stream_key= f"{node_name}-{node_short_code}"
    l = red_stream.xread(count=1, streams={stream_key: 0}, block=1000)

    for _k in l:
        stream_key, stream_messages = _k

        for _j in stream_messages:
            message_id, message_data = _j
            print(stream_key, message_id, message_data)

            try:
                asyncio.run(
                    visit_url(
                        json.loads(message_data['payload']), message_data['job_id']
                    )
                )
            except Exception as e:
                logging.exception(e)

            red_stream.xdel(stream_key, message_id)

    print("Done processing Message batch")

if __name__ == "__main__":
    print(f"Starting user agent: {node_name}")
    while True:
        try:
            run_task()
        except Exception as e:
            print(e)