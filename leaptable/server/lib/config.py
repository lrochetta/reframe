from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    upload_dir: str = '/leap-data/uploads/'


settings = Settings()