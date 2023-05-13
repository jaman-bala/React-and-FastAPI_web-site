from pydantic import BaseModel


class Loginclass(BaseModel):
    username: str
    password: str

    class Config:
        orm_mode = True