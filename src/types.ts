export interface UnsplashImage {
  id: string;
  alt_description: string;
  description: string | null;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
  likes: number;
}
