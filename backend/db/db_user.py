from sqlalchemy.orm.session import Session
from db.models import DbUser


def get_all(db: Session):
    return db.query(DbUser).all()
