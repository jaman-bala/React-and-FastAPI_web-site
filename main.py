from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.admin.api import admin


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
    allow_origins=["http://localhost:3000"])

 

app.include_router(admin)