import { Venue } from '../types';
import { MOCK_VENUES } from '../mock/mockData';
import { apiFetch } from './apiClient';

export const venueService = {
  async getVenues(): Promise<Venue[]> {
    try {
      return await apiFetch<Venue[]>('/venues');
    } catch {
      return MOCK_VENUES;
    }
  },

  async getVenueById(id: string): Promise<Venue | undefined> {
    try {
      return await apiFetch<Venue>(`/venues/${id}`);
    } catch {
      return MOCK_VENUES.find((v) => v.id === id) || MOCK_VENUES[0];
    }
  }
};
