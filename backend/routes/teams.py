from fastapi import APIRouter, HTTPException
from typing import List
from models import Team
from database import get_database

router = APIRouter()

@router.post("/", response_model=Team)
async def create_team(team: Team):
    db = get_database()
    team_dict = team.model_dump(exclude_unset=True)
    if 'id' in team_dict:
        del team_dict['id']
    
    result = await db.teams.insert_one(team_dict)
    team_dict['id'] = str(result.inserted_id)
    return team_dict

@router.get("/", response_model=List[Team])
async def get_teams():
    db = get_database()
    teams = []
    async for doc in db.teams.find():
        doc['id'] = str(doc['_id'])
        del doc['_id']
        teams.append(doc)
    return teams
