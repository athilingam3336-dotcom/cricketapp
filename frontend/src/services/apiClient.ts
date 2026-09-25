/**
 * Base API Client Service
 * Configured with environment variables (e.g. EXPO_PUBLIC_API_URL or VITE_API_URL).
 * Automatically falls back to mock data if real API is unconfigured or unreachable,
 * making backend integration seamless for the separate backend developer.
 */

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || process.env.VITE_API_URL || 'http://localhost:8000/api';
const USE_REAL_API = false; // Set to true when backend API is live

export async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  if (!USE_REAL_API) {
    throw new Error('Using Mock Data Layer');
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error ${response.status}: ${response.statusText}`);
  }

  return response.json();
}
