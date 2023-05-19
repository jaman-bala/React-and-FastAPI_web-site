# from pydantic import BaseModel, EmailStr
# from enum import Enum

# class UserBase(BaseModel):
#     email: EmailStr
#     username: str
#     password: str
#     first_name: str
#     last_name: str
#     is_active: bool = True
#     is_superuser: bool = False

#     class Config:
#         orm_mode = True



# class UserOut(UserBase):
#     id: int

#     class Config:
#         orm_mode = True



# class UserCreate(UserOut):

#     username: str
#     email: str
#     password: str
#     first_name: str

#     class Config:
#         orm_mode = True


# class UserUpdate(UserOut):
#     password: str = None


# class Role(Enum):
#     user = "user"
#     admin = "admin"
#     superuser = "superuser"