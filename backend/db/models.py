from .database import Base
from sqlalchemy import Column, Integer, String


class DbUser(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String)
    password = Column(String)
    name = Column(String)
    age = Column(Integer)
