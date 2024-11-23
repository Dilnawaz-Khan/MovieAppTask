import axiosInstance from './axiosConfig';
import {
  ApiResponse,
  Genre,
  GenreDetails,
  GenreResponse,
  MovieDetail,
  SearchResponse,
  TrailerResponse,
  UpcomingMoviesResponse,
  UpcomingMovieType,
} from '@types';
import {keys} from '@constants';

export const apiClient = {
  fetchUpcomingMovies: async (
    page: number = 1,
  ): Promise<ApiResponse<UpcomingMoviesResponse>> => {
    try {
      const response = await axiosInstance.get<UpcomingMoviesResponse>(
        `/movie/upcoming?api_key=${keys.api_key}&&page=${page}`,
      );
      const {
        dates,
        page: responsePage,
        results,
        total_pages,
        total_results,
      } = response.data;
      return {
        success: true,
        message: 'Success',
        data: {
          dates,
          page: responsePage,
          results,
          total_pages,
          total_results,
        },
      };
    } catch (error) {
      return {
        error: error instanceof Error ? error : new Error(String(error)),
        message: 'Failed to fetch upcoming movies',
        success: false,
        data: {
          dates: {maximum: '', minimum: ''},
          page: 0,
          results: [],
          total_pages: 0,
          total_results: 0,
        },
      };
    }
  },
  fetchMovieById: async (
    id: number,
  ): Promise<ApiResponse<MovieDetail | undefined>> => {
    try {
      const response = await axiosInstance.get<MovieDetail>(
        `movie/${id}?api_key=${keys.api_key}`,
      );
      return {
        success: true,
        message: 'movie details fetched',
        data: response.data,
      };
    } catch (error) {
      return {
        error: error instanceof Error ? error : new Error(String(error)),
        message: 'Failed to fetch movie details',
        success: false,
        data: undefined,
      };
    }
  },
  fetchTrailer: async (id: number): Promise<ApiResponse<TrailerResponse>> => {
    try {
      const response = await axiosInstance.get(
        `movie/${id}/videos?api_key=${keys.api_key}`,
      );

      return {
        success: true,
        message: 'Trailer fetched ',
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to fetch trailer',
        data: {
          id: -1,
          results: [],
        },
        error: error instanceof Error ? error : new Error(String(error)),
      };
    }
  },
  fetchGenres: async (): Promise<ApiResponse<GenreDetails[]>> => {
    try {
      const response = await axiosInstance.get<GenreResponse>(
        `/genre/movie/list?api_key=${keys.api_key}`,
      );

      const genresWithImages = await Promise.all(
        response.data.genres.map(async genre => {
          const moviesresult = await axiosInstance.get(
            `/discover/movie?api_key=${keys.api_key}&with_genres=${genre.id}`,
          );
          const movies = moviesresult.data;
          const backdropPath = movies.results[0].backdrop_path;
          const imageUrl = `https://image.tmdb.org/t/p/w500${backdropPath}`;
          return {
            ...genre,
            imageUrl,
          };
        }),
      );

      return {
        success: true,
        message: 'Genres with detail fetched',
        data: genresWithImages,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to fetch genres',
        data: [],
        error: error instanceof Error ? error : new Error(String(error)),
      };
    }
  },
  fetchGenreDetails: async (genreList: Genre[]): Promise<ApiResponse<any>> => {
    try {
      const genresWithImages = await Promise.all(
        genreList.map(async genre => {
          const moviesresult = await axiosInstance.get(
            `/discover/movie?api_key=${keys.api_key}&with_genres=${genre.id}`,
          );
          const movies = moviesresult.data;
          const backdropPath = movies.results[0].backdrop_path;
          const imageUrl = `https://image.tmdb.org/t/p/w500${backdropPath}`;
          return {
            ...genre,
            imageUrl,
          };
        }),
      );
      return {
        success: true,
        message: 'Genre Detail fetched',
        data: [],
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to fetch genres details',
        data: {},
        error: error instanceof Error ? error : new Error(String(error)),
      };
    }
  },
  searchMovie: async (
    movieName: string,
  ): Promise<ApiResponse<SearchResponse>> => {
    try {
      const response = await axiosInstance.get<SearchResponse>(
        `/search/movie?api_key=${keys.api_key}&query=${movieName}`,
      );

      return {
        success: true,
        message: 'movies result for the search term',
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to fetch genres details',
        data: {
          page: 0,
          results: [],
          total_pages: 0,
          total_results: 0,
        },
        error: error instanceof Error ? error : new Error(String(error)),
      };
    }
  },
};
