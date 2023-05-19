# import ormar
# from datetime import datetime
# from db import MainMata

# class User(ormar.Model):
#     class Meta(MainMata):
#         tablename = "users"

#     id: int = ormar.Integer(primary_key=True, unique=True)
#     username: str = ormar.String(max_length=30, unique=True)
#     password: str = ormar.String(max_length=30)
#     first_name: str = ormar.String(max_length=30)
#     last_name: str = ormar.String(max_length=30)
#     email: str = ormar.String(max_length=30)
#     data_join: datetime = ormar.DateTime(default=datetime.now)

#     is_active: bool = ormar.Boolean(default=False, nullable=False,)
#     is_superuser: bool = ormar.Boolean(default=False)


#     def __str__(self):
#         return f'{self.data_join}'




