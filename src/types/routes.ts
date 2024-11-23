import {GenreDetails, SearchResult} from './apiTypes';

export type RootStackParamList = {
  tabNavigation: undefined;
  'movie-detail': {movieId: number};
  trailer: {trailerKey: string; trailer: string};
  'seat-selection': undefined;
  'ticket-booking': undefined;
};

export type WatchStackParamList = {
  watch: undefined;
  'search-movies': undefined;
  'search-results': {
    movies: SearchResult[];
    categories: GenreDetails[];
  };
};
