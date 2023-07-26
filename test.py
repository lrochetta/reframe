import psycopg
import asyncio
from psycopg import sql

from typing import Union

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    PLAT_DB_HOST = 'nnextai-plat.coidzm0p67y1.us-east-2.rds.amazonaws.com'
    PLAT_DB_PASS = 'vifrAdREchOD0O9us6d5'
    PLAT_DB_USER = 'postgres'
    PLAT_DB_URL = f"postgresql://{PLAT_DB_USER}:{PLAT_DB_PASS}@{PLAT_DB_HOST}/platdb_b6ef_mango_tree"

    print(PLAT_DB_URL)

    sql_query_text = 'SELECT _id, "crunchbase_profile" FROM "tb_8a3e5ae9851e" LIMIT 10'

    _sql_obj = sql.SQL(sql_query_text)
    async with await psycopg.AsyncConnection.connect(PLAT_DB_URL, autocommit=True) as plat_db_conn:
        print(dir(plat_db_conn))
        async with plat_db_conn.cursor() as acur:
            print("running query", _sql_obj)
            await acur.execute(
                'SELECT _id, "crunchbase_profile" FROM "tb_8a3e5ae9851e" LIMIT 10')
            print("Done executing")
            await acur.fetchone()
            # will return (1, 100, "abc'def")
            async for record in acur:
                print(record)
    return {"Hello": "World"}



async def run_query():
    async with await psycopg.AsyncConnection.connect(PLAT_DB_URL, autocommit=True) as plat_db_conn:
        print(dir(plat_db_conn))
        async with plat_db_conn.cursor() as acur:
            print("running query", _sql_obj)
            await acur.execute(
                'SELECT _id, "crunchbase_profile" FROM "tb_8a3e5ae9851e" LIMIT 10')
            print("Done executing")
            await acur.fetchone()
            # will return (1, 100, "abc'def")
            async for record in acur:
                print(record)

# asyncio.run(run_query())