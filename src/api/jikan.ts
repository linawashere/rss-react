import axios from 'axios';
import type Anime from '../interfaces/Anime';
const API_URL = 'https://api.jikan.moe/v4';
export const searchAnime = async (
  query: string,
  page: number = 1
): Promise<Anime[]> => {
  try {
    const response = await axios.get(`${API_URL}/anime`, {
      params: {
        q: query,
        page,
        limit: 10,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Ошибка при запросе:', error);
    return [];
  }
};
