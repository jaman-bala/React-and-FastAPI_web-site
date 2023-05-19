from tortoise import Tortoise
from tortoise import Tortoise


db_url = "sqlite://database.sqlite3"


async def init_db() -> None:
    await Tortoise.init(
        db_url=db_url,
        modules={"models": ["backend.projects.models"]},
    )


async def close_db() -> None:
    await Tortoise.close_connections()


async def connect_db() -> None:
    await Tortoise.init(
        db_url=db_url,
        modules={"models": ["backend.projects.models"]},
    )
    await Tortoise.generate_schemas()



async def disconnect_db() -> None:
    await Tortoise.close_connections()
    await Tortoise.close_orm()
