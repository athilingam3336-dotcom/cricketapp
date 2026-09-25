import { Tournament, GroupStanding } from '../types';
import { MOCK_TOURNAMENTS, MOCK_STANDINGS } from '../mock/mockData';
import { apiFetch } from './apiClient';

export const tournamentService = {
  async getTournaments(): Promise<Tournament[]> {
    try {
      return await apiFetch<Tournament[]>('/tournaments');
    } catch {
      return MOCK_TOURNAMENTS;
    }
  },

  async getTournamentById(id: string): Promise<Tournament | undefined> {
    try {
      return await apiFetch<Tournament>(`/tournaments/${id}`);
    } catch {
      return MOCK_TOURNAMENTS.find((t) => t.id === id) || MOCK_TOURNAMENTS[0];
    }
  },

  async getStandings(tournamentId?: string): Promise<GroupStanding[]> {
    try {
      return await apiFetch<GroupStanding[]>(`/standings?tournamentId=${tournamentId || ''}`);
    } catch {
      return MOCK_STANDINGS;
    }
  }
};
