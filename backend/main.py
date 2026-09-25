from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="CricketApp API",
    description="Backend API for Cricket Scoring and Analytics",
    version="1.0.0"
)

# Allow CORS for local testing (React Native and web)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from routes import teams, players

app.include_router(teams.router, prefix="/api/teams", tags=["Teams"])
app.include_router(players.router, prefix="/api/players", tags=["Players"])

@app.get("/")
async def root():
    return {"message": "Welcome to the Regal Cricket API"}

# Additional routes will go here
