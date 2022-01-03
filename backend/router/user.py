from fastapi import APIRouter
from fastapi.params import Depends
from sqlalchemy.orm.session import Session
from db.db_user import get_all
from db import db_user


router = APIRouter(
    prefix='/api/v1/users',
    tags=['users']
)


@router.get('/all')
def get_all(db: Session = Depends(get_all)):
    return db_user.get_all(db)
