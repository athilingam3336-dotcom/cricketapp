import { Match, CommentaryBall } from '../types';
import { MOCK_MATCHES } from '../mock/mockData';
import { apiFetch } from './apiClient';

export const matchService = {
  async getMatches(): Promise<Match[]> {
    try {
      return await apiFetch<Match[]>('/matches');
    } catch {
      return MOCK_MATCHES;
    }
  },

  async getMatchById(id: string): Promise<Match | undefined> {
    try {
      return await apiFetch<Match>(`/matches/${id}`);
    } catch {
      return MOCK_MATCHES.find((m) => m.id === id) || MOCK_MATCHES[0];
    }
  },

  async getLiveMatches(): Promise<Match[]> {
    try {
      return await apiFetch<Match[]>('/matches?status=LIVE');
    } catch {
      return MOCK_MATCHES.filter((m) => m.status === 'LIVE');
    }
  },

  async getUpcomingMatches(): Promise<Match[]> {
    try {
      return await apiFetch<Match[]>('/matches?status=UPCOMING');
    } catch {
      return MOCK_MATCHES.filter((m) => m.status === 'UPCOMING');
    }
  },

  async getCompletedMatches(): Promise<Match[]> {
    try {
      return await apiFetch<Match[]>('/matches?status=COMPLETED');
    } catch {
      return MOCK_MATCHES.filter((m) => m.status === 'COMPLETED');
    }
  },

  async getCommentary(matchId: string): Promise<CommentaryBall[]> {
    try {
      return await apiFetch<CommentaryBall[]>(`/matches/${matchId}/commentary`);
    } catch {
      const match = MOCK_MATCHES.find((m) => m.id === matchId);
      return match?.commentary || [];
    }
  }
};
