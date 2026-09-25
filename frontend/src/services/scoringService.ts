import { apiFetch } from './apiClient';

export interface BallInput {
  matchId: string;
  runs: number;
  extraType?: 'WIDE' | 'NO_BALL' | 'BYE' | 'LEG_BYE' | 'PENALTY';
  wicketType?: 'BOWLED' | 'CAUGHT' | 'LBW' | 'RUN_OUT' | 'STUMPED' | 'HIT_WICKET' | 'RETIRED_HURT' | 'OBSTRUCTING';
  dismissedPlayerId?: string;
  commentaryText?: string;
}

export const scoringService = {
  async recordBall(input: BallInput): Promise<{ success: boolean; message: string }> {
    try {
      return await apiFetch<{ success: boolean; message: string }>('/scoring/ball', {
        method: 'POST',
        body: JSON.stringify(input),
      });
    } catch {
      return { success: true, message: 'Ball recorded (mock state)' };
    }
  },

  async undoBall(matchId: string): Promise<{ success: boolean; message: string }> {
    try {
      return await apiFetch<{ success: boolean; message: string }>('/scoring/undo', {
        method: 'POST',
        body: JSON.stringify({ matchId }),
      });
    } catch {
      return { success: true, message: 'Last ball undone (mock state)' };
    }
  }
};
