import ormar
from db import MainMata

class User(ormar.Model):
    class Meta(MainMata):
        tablename = "users"

    id: int = ormar.Integer(primary_key=True)
    username: str = ormar.String(max_length=30)
    password: str = ormar.String(max_length=30)
    first_name: str = ormar.String(max_length=30)
    last_name: str = ormar.String(max_length=30)
    email: str = ormar.String(max_length=30)


    def __str__(self):
        return f'{self.timetamp}'




