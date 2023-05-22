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

@pro.put('/about/{about_id}')
async def update_about(about_id: int, update_info: AboutIn):
    about = await About.get(id=about_id)
    update_info = update_info.dict(exclude_unset=True)
    about.title = update_info['title']
    about.description = update_info['description']
    about.image_path = update_info['image_path']
    await about.save()
    response = await AboutOut.from_tortoise_orm(about)
    return {"status": 200, "data": response}


@pro.delete('/about/{about_id}')
async def delete_about(about_id: int):
    about = await About.filter(id=about_id).first()
    if about:
        await about.delete()
        return {"status": 200, "message": "About deleted"}
    return {"status": 404, "message": "About not found"}


@pro.post('/news/')
async def add_news(news_info: NewsIn):
    news_add = await News.create(**news_info.dict(exclude_unset=True))
    response = await NewsOut.from_tortoise_orm(news_add)
    return {"status": 200, "data": response}

@pro.get('/news')
async def get_news():
    response = await NewsOut.from_queryset(News.all())
    return {"status": 200, "data": response}

@pro.get('/news/{news_id}')
async def get_specific_news(news_id: int):
    response = await NewsOut.from_queryset_single(News.get(id = news_id))
    return {"status": 200, "data": response}

@pro.put('/news/{news_id}')
async def update_news(news_id: int, update_info: NewsIn):
    news = await News.get(id=news_id)
    update_info = update_info.dict(exclude_unset=True)
    news.title = update_info['title']
    news.description = update_info['description']
    news.image_path = update_info['image_path']
    await news.save()
    response = await NewsOut.from_tortoise_orm(news)
    return {"status": 200, "data": response}

@pro.delete('/news/{news_id}')
async def delete_news(news_id: int):
    news = await News.filter(id=news_id).first()
    if news:
        await news.delete()
        return {"status": 200, "message": "News deleted"}
    return {"status": 404, "message": "News not found"}