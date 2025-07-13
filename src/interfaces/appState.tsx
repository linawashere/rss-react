import type Anime from "./Anime";

export default interface AppState {
    animeList: Anime[];
    isLoading: boolean;
    error: string | null;
    searchQuery: string;
}