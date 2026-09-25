import { User, UserRole } from '../types';
import { MOCK_USER } from '../mock/mockData';
import { apiFetch } from './apiClient';

export const authService = {
  async getCurrentUser(): Promise<User> {
    try {
      return await apiFetch<User>('/auth/me');
    } catch {
      return MOCK_USER;
    }
  },

  async login(email: string): Promise<{ user: User; token: string }> {
    try {
      return await apiFetch<{ user: User; token: string }>('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email }),
      });
    } catch {
      return { user: MOCK_USER, token: 'mock-jwt-token-12345' };
    }
  },

  async updateRole(role: UserRole): Promise<User> {
    return { ...MOCK_USER, role };
  }
};
