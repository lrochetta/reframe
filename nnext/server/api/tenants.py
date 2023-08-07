#!/usr/bin/env python

__authors__ = ["Peter W. Njenga"]
__copyright__ = "Copyright © 2023 NNext, Co."

# Standard Libraries

# External Libraries
from fastapi import APIRouter, Depends, HTTPException, status

# Internal Libraries
from nnext.server.lib.auth.prisma import JWTBearer, decodeJWT
from nnext.server.lib.db_models.agent import Agent
from nnext.server.lib.prisma import prisma

# Global Variables
router = APIRouter()

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
async def read_tenant(tenant_id: str, token=Depends(JWTBearer())):
    """Agent detail endpoint"""
    agent = prisma.agent.find_unique(where={"id": tenant_id}, include={"prompt": True})

    if agent:
        return {"success": True, "data": agent}

    raise HTTPException(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        detail=f"Agent with id: {tenant_id} not found",
    )


@router.delete(
    "/tenant/{tenant_id}", name="Delete tenant", description="Delete a specific tenant"
)
async def delete_agent(tenant_id: str, token=Depends(JWTBearer())):
    """Delete agent endpoint"""
    try:
        prisma.agentmemory.delete_many(where={"tenant_id": tenant_id})
        prisma.agent.delete(where={"id": tenant_id})

        return {"success": True, "data": None}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=e,
        )


@router.patch(
    "/agent/{tenant_id}", name="Patch tenant", description="Patch a specific tenant"
)
async def patch_tenant(tenant_id: str, body: dict, token=Depends(JWTBearer())):
    """Patch agent endpoint"""
    try:
        prisma.agent.update(data=body, where={"id": tenant_id})

        return {"success": True, "data": None}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=e,
        )