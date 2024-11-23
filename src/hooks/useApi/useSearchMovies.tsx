import {useCallback, useEffect, useMemo, useState} from 'react';
import Toast from 'react-native-simple-toast';
import {debounce} from 'lodash';

import {useNavigation} from '@react-navigation/native';
import {apiClient} from '@api';
import {GenreDetails, SearchResult} from '@types';
import {useWatch} from './useWatch';
import {WatchStack} from 'src/routes/stack/watch-stack';
import {useWatchNavigation} from '../navigation-hook/navigation-hook';
export const useSearchMovies = () => {
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState<GenreDetails[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [topResults, setTopResults] = useState<SearchResult[]>([]);
  const navigation = useWatchNavigation();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      if (loading) return;
      setLoading(true);
      const result = await apiClient.fetchGenres();
      if (!result?.success) throw result?.error;
      setCategories(result?.data);
    } catch (error) {
      console.log('[Err in getting generes]', error);
      Toast.show('Failed to get movie categories', Toast.LONG, {
        backgroundColor: 'red',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitSearch = async () => {
    try {
      const movies = await searchMovie();
      if (!movies?.length) return;
      navigation.navigate('search-results', {movies, categories});
    } catch (error) {
      console.log('[Handle submit failed]', error);
      //   Alert.alert('Something went wrong while handling request');
    } finally {
      setTopResults([]);
      setSearch('');
    }
  };

  const searchMovie = useCallback(
    async (text?: string) => {
      try {
        let query = text ?? search;
        if (searchLoading || query.length < 2) return;
        setSearchLoading(true);
        const resp = await apiClient.searchMovie(query);
        if (!resp?.success) throw resp?.error;
        setTopResults(resp.data.results.splice(0, 3));
        return resp?.data.results || [];
      } catch (error) {
        console.log('[Err fetching the search results]', error);
        Toast.show('Search not found', Toast.LONG, {
          backgroundColor: 'red',
        });

        return [];
      } finally {
        setSearchLoading(false);
      }
    },
    [search, searchLoading],
  );

  const handleTextChange = async (text: string) => {
    setSearch(text);
    debounceCall(text);
  };

  const debounceCall = useCallback(
    debounce((text: string) => {
      searchMovie(text);
    }, 500),
    [],
  );

  const getGenreName = (ids: number[]) => {
    const genre =
      ids
        ?.map(
          (id: number) => categories.find(category => category.id === id)?.name,
        )
        .find((name: string | undefined) => name !== undefined) ?? 'unknown';

    return genre;
  };

  return useMemo(
    () => ({
      search,
      setSearch,
      fetchCategories,
      loading,
      categories,
      searchLoading,
      searchMovie,
      handleTextChange,
      topResults,
      handleSubmitSearch,
      getGenreName,
    }),
    [
      search,
      setSearch,
      fetchCategories,
      loading,
      categories,
      searchLoading,
      searchMovie,
      topResults,
      handleSubmitSearch,
    ],
  );
};
