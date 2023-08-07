from pydantic import BaseModel


class Tenant(BaseModel):
    slug: str
    name: str
    db_url: str
