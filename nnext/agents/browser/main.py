#!/usr/bin/env python

__authors__ = ["Peter W. Njenga"]
__copyright__ = "Copyright © 2023 NNext, Co."

# Standard Libraries
import os
import logging
from pprint import pprint

# External Libraries
import redis
from loguru import logger

# Internal Libraries
from nnext.lib.models.llms.main import OpenAI
from nnext.lib.core.main import SingleActionChatAgent

from dotenv import load_dotenv

load_dotenv()

# Global Variables
META_DB_HOST = os.environ.get("META_DB_HOST")
META_DB_PASS = os.environ.get("META_DB_PASS")
META_DB_USER = os.environ.get("META_DB_USER")
META_DB_URL = f"postgresql://{META_DB_USER}:{META_DB_PASS}@{META_DB_HOST}/nnext"

node_id = "0189248c-c8cb-754c-b51c-dd58b692f6a6"
node_short_code = node_id.split("-")[-2]
node_name = "browser"

REDIS_STREAM_HOST=os.environ.get('REDIS_STREAM_HOST', "localhost")
REDIS_CACHE_HOST=os.environ.get('REDIS_CACHE_HOST', "localhost")
REDIS_PASSWORD=os.environ.get('REDIS_PASSWORD')
red_stream = redis.StrictRedis(
    REDIS_STREAM_HOST, 6379, charset="utf-8",
    password=REDIS_PASSWORD, decode_responses=True)
red_cache = redis.StrictRedis(
    REDIS_STREAM_HOST, 6379, charset="utf-8",
    password=REDIS_PASSWORD, decode_responses=True)

PLAT_DB_HOST = os.environ.get("PLAT_DB_HOST")
PLAT_DB_PASS = os.environ.get("PLAT_DB_PASS")
PLAT_DB_USER = os.environ.get("PLAT_DB_USER")

META_DB_HOST = os.environ.get("META_DB_HOST")
META_DB_PASS = os.environ.get("META_DB_PASS")
META_DB_USER = os.environ.get("META_DB_USER")

PLAT_DB_URL = f"postgresql://{PLAT_DB_USER}:{PLAT_DB_PASS}@{PLAT_DB_HOST}"
META_DB_URL = f"postgresql://{META_DB_USER}:{META_DB_PASS}@{META_DB_HOST}/nnext"


llm = OpenAI()

browser_agent = SingleActionChatAgent(
    name="browser",
    invoke_commands=["browse", "visit", "open"],
    tool_list=[{
        "display_name": "SERP",
        "name": "serp",
        "id": "serp",
        "output": "serp_content"
    }],
    chat_template = [
        {"role": "system", "content": "Given the following content. Return the information asked without generating supperfluous text. Answer with as few words as possible."},
        {"role": "user", "content": "{{web_page_content}}"},
        {"role": "assistant", "content": "Thanks. I have understood the context. Please provide the prompt"},
        {"role": "user", "content": "{{llm_prompt}}"}
    ],
    llm=llm
)

if __name__ == "__main__":
    logger.info(f"Starting Browser agent: {node_name}")
    browser_agent.run()