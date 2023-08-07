#!/usr/bin/env python

__authors__ = ["Peter W. Njenga"]
__copyright__ = "Copyright © 2023 NNext, Co."

# Standard Libraries
import os
from pprint import pprint
from urllib.parse import urlparse, urlunparse

# External Libraries
from serpapi import GoogleSearch
from loguru import logger

# Internal Libraries
from nnext.lib.core.tool import Tool

# Global Variables
BRIGHT_DATA_KEY = os.environ.get("BRIGHT_DATA_KEY")
browser_url = f'wss://{BRIGHT_DATA_KEY}@brd.superproxy.io:9222'

class SerpTool(Tool):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def exec(self, url, *args, **kwargs):
        search = GoogleSearch({
            "q": "coffee",
            "location": "Austin,Texas",
            "api_key": "<your secret api key>"
        })
        result = search.get_dict()
        pprint(result)

        return result

if __name__ == "__main__":
    serp_tool = SerpTool(
        name="serp",
        invoke_commands=["serp_tool", "search", "google_search", "search_google"],
        with_cache=True
    )
    logger.info(f"🏁 Starting SERP tool")
    serp_tool.run()