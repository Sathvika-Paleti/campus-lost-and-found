from sqlalchemy.orm import Session
from models import User, Item
from schemas import UserCreate, ItemCreate, ItemUpdate
from security import hash_password, verify_password
from auth import create_access_token

# ---------------- USER ----------------

def create_user(db: Session, user: UserCreate):
    db_user = User(
        name=user.name,
        email=user.email,
        password=hash_password(user.password)
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return db_user


def login_user(db: Session, email: str, password: str):
    user = db.query(User).filter(User.email == email).first()

    if user is None:
        return None

    if not verify_password(password, user.password):
        return None

    token = create_access_token(
        {
            "sub": user.email,
            "id": user.id
        }
    )

    return {
        "message": "Login Successful",
        "access_token": token,
        "token_type": "bearer"
    }


# ---------------- ITEM ----------------

def create_item(db: Session, item: ItemCreate):
    db_item = Item(
        title=item.title,
        description=item.description,
        category=item.category,
        location=item.location,
        status=item.status,
        image=item.image,
        owner_id=item.owner_id
    )

    db.add(db_item)
    db.commit()
    db.refresh(db_item)

    return db_item


def get_all_items(db: Session):
    return db.query(Item).all()


def get_item_by_id(db: Session, item_id: int):
    return db.query(Item).filter(Item.id == item_id).first()


def search_items(db: Session, keyword: str):
    return db.query(Item).filter(
        Item.title.contains(keyword)
    ).all()


def update_item(db: Session, item_id: int, item: ItemUpdate):
    db_item = db.query(Item).filter(Item.id == item_id).first()

    if db_item is None:
        return None

    db_item.title = item.title
    db_item.description = item.description
    db_item.category = item.category
    db_item.location = item.location
    db_item.status = item.status
    db_item.image = item.image

    db.commit()
    db.refresh(db_item)

    return db_item


def delete_item(db: Session, item_id: int):
    item = db.query(Item).filter(Item.id == item_id).first()

    if item is None:
        return None

    db.delete(item)
    db.commit()

    return {"message": "Item Deleted Successfully"}