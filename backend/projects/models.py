import ormar
from db import MainMata


class About(ormar.Model):
    class Meta(MainMata):
        __tablename__ = 'aboutes'

        id: int = ormar.Integer(primary_key=True)
        title: str = ormar.String(max_length=255)
        descriptions = ormar.String(max_length=1000)
        image: str = ormar.String(max_length=255)



class Contact(ormar.Model):
    class Meta(MainMata):
        __tablename__ = 'contacts'

        id: int = ormar.Integer(primary_key=True)
        fullname: str = ormar.String(max_length=255)
        email: str = ormar.String(max_length=255)


class New(ormar.Model):
    class Meta(MainMata):
        __tablename__ = 'news'

        id: int = ormar.Integer(primary_key=True)
        title: str = ormar.String(max_length=255)
        descriptions: ormar.String(max_length=255)
        image: str = ormar.String(max_length=255)