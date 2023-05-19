from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


# from backend.admin.api import admin
from backend.projects.api import pro

from db import connect_db, disconnect_db

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
    allow_origins=["http://localhost:3000"])




@app.on_event("startup")
async def startup() -> None:
    await connect_db()


@app.on_event("shutdown")
async def shutdown() -> None:
    await disconnect_db()




# app.include_router(admin)
app.include_router(pro)