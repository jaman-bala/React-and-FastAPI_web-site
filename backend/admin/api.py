from typing import Union
import jwt
from fastapi.encoders import jsonable_encoder
from fastapi import APIRouter


from backend.admin.schema import Loginclass


SECRET_KEY = "$OkIrm5y0zuo#${Nf2scU*xe~O5*rQ"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 800

admin = APIRouter()

# test
dummy_user = {
    "username": "asd",
    "password": "123456"
}





@admin.get("/")
async def read_root():
    return {"Hello": "Word"}

@admin.post("/login")
async def login_user(login_item: Loginclass):
    data = jsonable_encoder(login_item)
    if dummy_user['username'] == data['username'] and dummy_user['password'] == data['password']:
        encoded_jwt = jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)
        return {'token': encoded_jwt }
    else:
        return {'message': 'Login failed'}

