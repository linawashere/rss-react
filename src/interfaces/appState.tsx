import type Anime from './anime.tsx';

export default interface AppState {
  animeList: Anime[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
}
