from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import relationship

from database import Base

# ---------------- User ----------------

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    email = Column(String(100), unique=True, index=True)
    password = Column(String(255))

# ---------------- Item ----------------

class Item(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100))
    description = Column(Text)
    category = Column(String(50))
    location = Column(String(100))
    status = Column(String(20))
    image = Column(String(255))
    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User")