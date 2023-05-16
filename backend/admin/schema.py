from pydantic import BaseModel, EmailStr
from enum import Enum

class User(BaseModel):
    email: EmailStr
    username: str
    password: str
    first_name: str
    last_name: str





class UserOut(User):
    id: int


class Role(Enum):
    user = "user"
    admin = "admin"
    superuser = "superuser"