from fastapi import APIRouter, HTTPException
from typing import List
from models import Player
from database import get_database

router = APIRouter()

@router.post("/", response_model=Player)
async def create_player(player: Player):
    db = get_database()
    player_dict = player.model_dump(exclude_unset=True)
    if 'id' in player_dict:
        del player_dict['id']
    
    result = await db.players.insert_one(player_dict)
    player_dict['id'] = str(result.inserted_id)
    return player_dict

@router.get("/", response_model=List[Player])
async def get_players(teamId: str = None):
    db = get_database()
    query = {}
    if teamId:
        query["teamId"] = teamId
        
    players = []
    async for doc in db.players.find(query):
        doc['id'] = str(doc['_id'])
        del doc['_id']
        players.append(doc)
    return players
