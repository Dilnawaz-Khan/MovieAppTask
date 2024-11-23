import {
  ScreenWrapper,
  SearchInput,
  SearchResultCard,
  CategoryViewCard,
} from '@components';
import {useAppNavigation, useSearchMovies, useWatchNavigation} from '@hooks';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {useStyles} from './style';

export const SearchMovies = () => {
  const watchNavigation = useWatchNavigation();
  const appNavigation = useAppNavigation();
  const {styles} = useStyles();

  const {
    search,
    setSearch,
    fetchCategories,
    loading,
    categories,
    searchMovie,
    searchLoading,
    topResults,
    handleTextChange,
    handleSubmitSearch,
    getGenreName,
  } = useSearchMovies();

  return (
    <ScreenWrapper>
      <View style={styles.searchContainerView}>
        <SearchInput
          onCancel={() => {
            setSearch('');
            watchNavigation.goBack();
          }}
          value={search}
          onSearch={handleSubmitSearch}
          onChangeValue={handleTextChange}
        />
      </View>
      {search || topResults.length || searchLoading ? (
        <View style={styles.contentView}>
          {searchLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={topResults}
              contentContainerStyle={styles.contentContainerStyle}
              ListHeaderComponent={() => (
                <Text style={styles.topResults}>Top Results</Text>
              )}
              renderItem={({item}) => {
                return (
                  <SearchResultCard
                    onPress={() =>
                      appNavigation.navigate('movie-detail', {
                        movieId: item?.id,
                      })
                    }
                    title={item?.title}
                    imageUrl={
                      item?.poster_path || item?.backdrop_path
                        ? `https://image.tmdb.org/t/p/w780${
                            item?.poster_path ?? item?.backdrop_path
                          }`
                        : null
                    }
                    genre={getGenreName(item.genre_ids)}
                  />
                );
              }}
              keyExtractor={item => item.id.toString()}
            />
          )}
        </View>
      ) : (
        <CategoryViewCard loading={loading} categories={categories} />
      )}
    </ScreenWrapper>
  );
};
