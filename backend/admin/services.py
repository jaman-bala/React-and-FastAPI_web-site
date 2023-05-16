from typing import List
from . import schema, models


async def create_user(users: schema.User) -> models.User:
    return await models.User.objects.create(**users.dict())


async def get_users(user = models.User):
    return await models.User.objects.all()