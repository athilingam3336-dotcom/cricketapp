import { Team } from '../types';
import { MOCK_TEAMS } from '../mock/mockData';
import { apiFetch } from './apiClient';

export const teamService = {
  async getTeams(): Promise<Team[]> {
    try {
      return await apiFetch<Team[]>('/teams');
    } catch {
      return MOCK_TEAMS;
    }
  },

  async getTeamById(id: string): Promise<Team | undefined> {
    try {
      return await apiFetch<Team>(`/teams/${id}`);
    } catch {
      return MOCK_TEAMS.find((t) => t.id === id) || MOCK_TEAMS[0];
    }
  }
};
