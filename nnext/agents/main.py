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
from psycopg import sql
import redis
# import nnext
from dask.distributed import Client

# Internal Libraries
from browser.main import visit_url
from openainode.main import  run_prompt

from dotenv import load_dotenv

load_dotenv()

# Global Variables
META_DB_HOST = os.environ.get("META_DB_HOST")
META_DB_PASS = os.environ.get("META_DB_PASS")
META_DB_USER = os.environ.get("META_DB_USER")
META_DB_URL = f"postgresql://{META_DB_USER}:{META_DB_PASS}@{META_DB_HOST}/nnext"
red = redis.StrictRedis('localhost', 6379, charset="utf-8", decode_responses=True)
node_id = "0189248c-c8cb-754c-b51c-dd58b692f6a6"
node_short_code = node_id.split("-")[-2]
node_name = "browser"

REDIS_STREAM_HOST=os.environ.get('REDIS_STREAM_HOST', "localhost")
REDIS_CACHE_HOST=os.environ.get('REDIS_CACHE_HOST', "localhost")
red_stream = redis.StrictRedis(REDIS_STREAM_HOST, 6379, charset="utf-8", decode_responses=True)
red_cache = redis.StrictRedis(REDIS_CACHE_HOST, 6379, charset="utf-8", decode_responses=True)

PLAT_DB_HOST = os.environ.get("PLAT_DB_HOST")
PLAT_DB_PASS = os.environ.get("PLAT_DB_PASS")
PLAT_DB_USER = os.environ.get("PLAT_DB_USER")

META_DB_HOST = os.environ.get("META_DB_HOST")
META_DB_PASS = os.environ.get("META_DB_PASS")
META_DB_USER = os.environ.get("META_DB_USER")

PLAT_DB_URL = f"postgresql://{PLAT_DB_USER}:{PLAT_DB_PASS}@{PLAT_DB_HOST}"
META_DB_URL = f"postgresql://{META_DB_USER}:{META_DB_PASS}@{META_DB_HOST}/nnext"

async def run_task():
    stream_key= f"{node_name}-{node_short_code}"
    print(f"stream_key: {stream_key}")
    l = red.xread(count=1, streams={stream_key: 0}, block=1000)

    for _k in l:
        stream_key, stream_messages = _k
        for _j in stream_messages:
            message_id, message_data = _j
            print(stream_key, message_id, message_data)

            # red.xdel(stream_key, message_id)
            # return

            with psycopg.connect(META_DB_URL) as meta_db_conn:
                try:
                    job_id = message_data['job_id']
                    dataframe_id = message_data['dataframe_id']
                    output_col = message_data['output_col']
                    print()

                    # Retrieve the project from the DB.
                    job = meta_db_conn.execute(
                        """
                        SELECT _id, workspace_id, read_cache, write_cache, *
                        FROM agent.job WHERE _id = %(_id)s
                        """,
                        {"_id": job_id}
                    ).fetchone()

                    job_id, workspace_id = job[0], job[1]
                    read_cache, write_cache = job[2], job[3]
                    print(job_id, workspace_id)

                    # Retrieve the project from the DB.
                    workspace = meta_db_conn.execute(
                        """
                        SELECT _id, slug FROM workspace WHERE _id = %(_id)s
                        """,
                        {"_id": workspace_id}
                    ).fetchone()
                    workspace_id, workspace_slug = workspace[0], workspace[1]

                    # Retrieve the dataset from the DB.
                    dataframe = meta_db_conn.execute(
                        """
                        SELECT _id, slug, table_name FROM dataframe WHERE _id = %(_id)s
                        """,
                        {"_id": dataframe_id}
                    ).fetchone()
                    dataframe_id, dataframe_slug, dataframe_table = dataframe[0], dataframe[1], dataframe[2]

                    print(dataframe_id, dataframe_slug, dataframe_table)

                    payload = json.loads(message_data['payload'])

                    url = payload['url']
                    elem_id = payload['_id']
                    # dataframe_id = payload['dataframe_id']

                    job_id = message_data['job_id']
                    prompt = payload['prompt']

                    client = await Client(asynchronous=True)  # start local workers as threads

                    f_context = client.submit(
                        visit_url, url, elem_id, read_cache=read_cache, write_cache=write_cache
                    )

                    context = await f_context.result()

                    f_openai_result = client.submit(run_prompt, str(prompt), str(context))

                    openai_result = await f_openai_result.result()
                    # print(openai_result, type(openai_result))

                    val = openai_result['choices'][0]['message']["content"]
                    print("👗")

                    # Construct the workspace DB connection string and connect to it.
                    dbname_str = f"platdb_{str(workspace_id).split('-')[3]}_{workspace_slug}"
                    CURR_PLAT_DB_URL = f"{PLAT_DB_URL}/{dbname_str}"
                    with psycopg.connect(CURR_PLAT_DB_URL) as plat_db_conn:

                        # Upsert the value.
                        _sql_text = sql.SQL(
                            """
                            INSERT INTO {} (_id, {})
                            VALUES (%(_id)s, {})
                            ON CONFLICT (_id)
                            DO UPDATE SET {} = EXCLUDED.{}
                            RETURNING _id
                            """
                        ).format(
                            sql.Identifier(dataframe_table),
                            sql.Identifier(output_col),
                            sql.Placeholder(output_col),
                            sql.Identifier(output_col),
                            sql.Identifier(output_col),
                            sql.Identifier(output_col)
                        )

                        print(output_col, _sql_text.as_string(plat_db_conn))


                        vals = {
                            "_id": elem_id,
                            output_col: val
                        }

                        try:
                            plat_db_conn.execute(_sql_text, vals)
                            print(f"Upserted {elem_id}")
                        except Exception as e:
                            logging.exception(e)
                            return {"status": "failure"}


                    await client.close()
                    print("Done processing Message batch")
                except Exception as e:
                    logging.exception(e)
                    # red.xdel(stream_key, message_id)
                    return

                red.xdel(stream_key, message_id)

if __name__ == "__main__":
   print(f"Starting user agent: {node_name}")
   while True:
      try:
         asyncio.get_event_loop().run_until_complete(run_task())
      except Exception as e:
         logging.exception(e)
