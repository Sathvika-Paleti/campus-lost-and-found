from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os

from database import Base, engine
from routers import users, items

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Campus Lost & Found API"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create uploads folder
if not os.path.exists("uploads"):
    os.makedirs("uploads")

# Serve uploaded images
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

# Routers
app.include_router(users.router)
app.include_router(items.router)

@app.get("/")
def root():
    return {
        "message": "Campus Lost & Found API is Running Successfully"
    }