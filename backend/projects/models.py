from tortoise.models import Model
from tortoise import fields
from tortoise.contrib.pydantic import pydantic_model_creator


class About(Model):
    id = fields.IntField(pk=True)
    title = fields.CharField(max_length=255)
    description = fields.TextField()
    image_path = fields.CharField(max_length=255)
    uploaded_at = fields.DatetimeField(auto_now_add=True)

    class Meta:
        table = "about"
        verbose_name = "О нас"
        verbose_name_plural = "Про нас"

    def __str__(self):
        return self.title


class News(Model):
    id = fields.IntField(pk=True)
    title = fields.CharField(max_length=255)
    description = fields.TextField()
    image_path = fields.CharField(max_length=255)
    uploaded_at = fields.DatetimeField(auto_now_add=True)

    class Meta:
        table = "news"
        verbose_name = "Новости"
        verbose_name_plural = "Новости"

    def __str__(self):
        return self.title


AboutOut = pydantic_model_creator(About, name="AboutOut")
AboutIn = pydantic_model_creator(About, name="AboutIn", exclude_readonly=True)

NewsOut = pydantic_model_creator(News, name="NewsOut")
NewsIn = pydantic_model_creator(News, name="NewsIn", exclude_readonly=True)
