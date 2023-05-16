from typing import Union, List
import jwt
from starlette.responses import RedirectResponse, Response
from fastapi.encoders import jsonable_encoder
from fastapi import APIRouter
from typing import Optional
from fastapi import HTTPException

from . import schema, services, auth, models
from db import database
admin = APIRouter()




@admin.get("/")
async def read_root():
    pass




@admin.post("/createusers/")
async def create_user(users: models.User):
    return await users.save()

@admin.get("/api/createuser/", tags=["users"])
async def get_user():
    users = await models.User.objects.all()
    user_json = jsonable_encoder(users)
    return user_json


