import type Anime from './anime.tsx';

export default interface CardListProps {
  animeList: Anime[];
  isLoading: boolean;
  error: string | null;
}
