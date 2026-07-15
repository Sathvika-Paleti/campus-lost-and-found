from pydantic import BaseModel, EmailStr

# ---------------- USER SCHEMAS ----------------

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


# ---------------- ITEM SCHEMAS ----------------

class ItemCreate(BaseModel):
    title: str
    description: str
    category: str
    location: str
    status: str
    image: str
    owner_id: int


class ItemUpdate(BaseModel):
    title: str
    description: str
    category: str
    location: str
    status: str
    image: str