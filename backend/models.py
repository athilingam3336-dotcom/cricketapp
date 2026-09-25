from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

class Player(BaseModel):
    id: Optional[str] = None
    name: str
    role: str # Batter, Bowler, All-Rounder, Wicket Keeper
    teamId: str
    battingStyle: Optional[str] = None
    bowlingStyle: Optional[str] = None

class Team(BaseModel):
    id: Optional[str] = None
    name: str
    shortName: str
    players: List[str] = [] # List of player IDs

class Tournament(BaseModel):
    id: Optional[str] = None
    name: str
    season: str
    status: str # upcoming, active, completed

class Match(BaseModel):
    id: Optional[str] = None
    tournamentId: str
    teamA: str
    teamB: str
    venue: str
    date: datetime
    status: str # UPCOMING, LIVE, COMPLETED
    overs: int
