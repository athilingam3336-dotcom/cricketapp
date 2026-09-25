import { Player } from '../types';
import { MOCK_PLAYERS } from '../mock/mockData';
import { apiFetch } from './apiClient';

export const playerService = {
  async getPlayers(): Promise<Player[]> {
    try {
      return await apiFetch<Player[]>('/players');
    } catch {
      return MOCK_PLAYERS;
    }
  },

  async getPlayerById(id: string): Promise<Player | undefined> {
    try {
      return await apiFetch<Player>(`/players/${id}`);
    } catch {
      return MOCK_PLAYERS.find((p) => p.id === id) || MOCK_PLAYERS[0];
    }
  }
};
