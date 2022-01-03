import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from router import user

app = FastAPI(
    title="member",
    terms_of_service="http://localhost:5000",
)

app.include_router(user.router)


@app.get("/")
def root():
    return {"title": "Hello World"}


if __name__ == "__main__":
    uvicorn.run("app:app", port=5000, reload=True)
