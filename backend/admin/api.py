import jwt

from fastapi.encoders import jsonable_encoder
from fastapi import APIRouter
from typing import Optional, List


from . import schema, services, auth, models



admin = APIRouter()



@admin.post("/createusers/", response_model=schema.UserOut)
async def create_user(users: schema.User):
    return await models.User(**users.dict()).save()

@admin.get("/api/createuser/", tags=["users"], response_model=List[schema.UserOut])
async def get_user():
    return models.User.objects.all()


