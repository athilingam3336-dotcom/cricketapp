import { NewsArticle } from '../types';
import { MOCK_NEWS } from '../mock/mockData';
import { apiFetch } from './apiClient';

export const newsService = {
  async getNews(): Promise<NewsArticle[]> {
    try {
      return await apiFetch<NewsArticle[]>('/news');
    } catch {
      return MOCK_NEWS;
    }
  },

  async getArticleById(id: string): Promise<NewsArticle | undefined> {
    try {
      return await apiFetch<NewsArticle>(`/news/${id}`);
    } catch {
      return MOCK_NEWS.find((n) => n.id === id) || MOCK_NEWS[0];
    }
  }
};
