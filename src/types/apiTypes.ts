export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: Error;
}

// upcoming movies types
export interface UpcomingMoviesResponse {
  dates: Dates;
  page: number;
  results: UpcomingMovieType[];
  total_pages: number;
  total_results: number;
}

export interface UpcomingMovieType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Dates {
  maximum: string;
  minimum: string;
}

// genres types

export interface GenreResponse {
  genres: Genre[];
}
export interface Genre {
  id: number;
  name: string;
}

// genres detail
export interface GenreDetails {
  id: number;
  imageUrl: string;
  name: string;
}
