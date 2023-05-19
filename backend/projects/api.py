from fastapi import APIRouter

from .models import AboutIn, AboutOut, NewsIn, NewsOut, About, News

pro = APIRouter()


@pro.post('/about/')
async def add_about(about_info: AboutIn):
    about_add = await About.create(**about_info.dict(exclude_unset=True))
    response = await AboutOut.from_tortoise_orm(about_add)
    return {"status": 200, "data": response}



@pro.get('/about')
async def get_about():
    response = await AboutOut.from_queryset(About.all())
    return {"status": 200, "data": response}

@pro.get('/about/{about_id}')
async def get_specific_about(about_id: int):
    response = await AboutOut.from_queryset_single(About.get(id = about_id))
    return {"status": 200, "data": response}