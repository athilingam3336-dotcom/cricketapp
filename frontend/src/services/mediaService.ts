import { MediaItem } from '../types';
import { MOCK_MEDIA } from '../mock/mockData';
import { apiFetch } from './apiClient';

export const mediaService = {
  async getMedia(): Promise<MediaItem[]> {
    try {
      return await apiFetch<MediaItem[]>('/media');
    } catch {
      return MOCK_MEDIA;
    }
  }
};
