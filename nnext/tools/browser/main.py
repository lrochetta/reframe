#!/usr/bin/env python

__authors__ = ["Peter W. Njenga"]
__copyright__ = "Copyright © 2023 NNext, Co."

# Standard Libraries
import os
from pprint import pprint
from urllib.parse import urljoin, urlencode, urlparse, urlunparse

# External Libraries
from playwright.async_api import async_playwright
from loguru import logger
import validators

# Internal Libraries
from nnext.lib.core import ToolDecor

# Global Variables
BRIGHT_DATA_KEY = os.environ.get("BRIGHT_DATA_KEY")
browser_url = f'wss://{BRIGHT_DATA_KEY}@brd.superproxy.io:9222'

@ToolDecor(
    name="browser",
    invoke_commands=["browse", "visit", "open"],
    with_cache=True
)
async def visit_url(url, *args, **kwargs):
    async with async_playwright() as pw:
        logger.debug(f'connecting to browser');
        browser = await pw.chromium.connect_over_cdp(browser_url)
        logger.debug('connected  to browser');
        page = await browser.new_page()

        try:
            logger.info(f'Attempting to visit: {url}')
            validators.url(url)

            # Sometimes the URL is not fully qualified. We need to fix that
            # by adding the scheme.
            url_parsed = urlparse(url)
            if not url_parsed.scheme:
                logger.warning(f'URL {url} does not have a scheme. Assuming https')
                url = f"https://{url}"
                url_parsed = urlparse(url)

            await page.goto(urlunparse(url_parsed), timeout=120000)
        except Exception as e:
            logger.exception(e)
            return None

        await page.screenshot(path=f"{id}-screenshot.png")

        texts = await page.locator('div').all_inner_texts()

        await browser.close()

    return texts

if __name__ == "__main__":
    logger.info(f"Starting browser tool agent")
    visit_url.run()