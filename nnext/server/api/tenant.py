import json
from pprint import pprint
from time import time
import threading
import logging
from queue import Queue
from typing import Any, Dict

import uuid as uuid
from psycopg import sql
import psycopg
from decouple import config
from fastapi import APIRouter, BackgroundTasks, Depends, HTTPException, status
from fastapi.security.api_key import APIKey
from starlette.responses import StreamingResponse
from uuid6 import uuid7
from loguru import logger
from nnext.server.lib.agents.base import AgentBase
from nnext.server.lib.agents.factory import AgentFactory
from nnext.server.lib.auth.api import get_api_key
from nnext.server.lib.auth.prisma import JWTBearer, decodeJWT
from nnext.server.lib.models.agent import Agent, PredictAgent
from nnext.server.lib.prisma import prisma

router = APIRouter()
from os import environ as env
import os
import redis
REDIS_STREAM_HOST=os.environ.get('REDIS_STREAM_HOST', "localhost")
REDIS_PASSWORD=os.environ.get('REDIS_PASSWORD')
red_stream = redis.StrictRedis(
    REDIS_STREAM_HOST, 6379, charset="utf-8",
    password=REDIS_PASSWORD, decode_responses=True)

@router.post("/tenant", name="Create Tenant", description="Create New DB Tenant")
async def create_tenant(body: Agent):
    """Agents endpoint"""
    try:
        agent = prisma.tenant.create(
            {
                "_id": body.name,
                "db_url": body.type,
            },
            include={"user": True},
        )

        return {"success": True, "data": agent}

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=e,
        )


@router.get("/tenant", name="List all tenants", description="List all tenants")
async def list_agents():
    """Agents endpoint"""
    decoded = decodeJWT(token)
    agents = prisma.agent.find_many(
        where={"userId": decoded["userId"]},
        include={
            "user": True,
        },
        order={"createdAt": "desc"},
    )

    if agents:
        return {"success": True, "data": agents}

    raise HTTPException(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        detail="No agents found",
    )


@router.get("/tenant/{tenant_id}", name="Get tenant", description="Get a specific tenant")
async def read_tenant(agentId: str, token=Depends(JWTBearer())):
    """Agent detail endpoint"""
    agent = prisma.agent.find_unique(where={"id": agentId}, include={"prompt": True})

    if agent:
        return {"success": True, "data": agent}

    raise HTTPException(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        detail=f"Agent with id: {agentId} not found",
    )


@router.delete(
    "/tenant/{tenant_id}", name="Delete tenant", description="Delete a specific tenant"
)
async def delete_agent(agentId: str, token=Depends(JWTBearer())):
    """Delete agent endpoint"""
    try:
        prisma.agentmemory.delete_many(where={"agentId": agentId})
        prisma.agent.delete(where={"id": agentId})

        return {"success": True, "data": None}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=e,
        )


@router.patch(
    "/agent/{agentId}", name="Patch tenant", description="Patch a specific tenant"
)
async def patch_tenant(agentId: str, body: dict, token=Depends(JWTBearer())):
    """Patch agent endpoint"""
    try:
        prisma.agent.update(data=body, where={"id": agentId})

        return {"success": True, "data": None}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=e,
        )