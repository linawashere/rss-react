export default interface Anime {
  mal_id: number;
  title: string;
  url: string;
  synopsis: string;
  images?: {
    jpg: {
      image_url: string;
    };
  };
}
