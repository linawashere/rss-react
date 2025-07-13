import type Anime from './Anime';

export default interface CardListProps {
  animeList: Anime[];
  isLoading: boolean;
  error: string | null;
}
