import {
  ScreenWrapper,
  SearchInput,
  SearchResultCard,
  CategoryViewCard,
} from '@components';
import {useSearchMovies, useWatchNavigation} from '@hooks';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {useStyles} from './style';

export const SearchMovies = () => {
  const watchNavigation = useWatchNavigation();
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
            <>
              <View style={styles.categoryHeader}>
                {topResults.length > 0 && <Text>Top Results</Text>}
              </View>

              <FlatList
                data={topResults}
                contentContainerStyle={styles.contentContainerStyle}
                renderItem={({item, index}: {item: any; index: number}) => {
                  return (
                    <SearchResultCard
                      onPress={
                        () => null
                        // navigation.navigate(SCREENS.MOVIEDETAILS, {
                        //   movieId: item?.id,
                        // })
                      }
                      title={item?.title}
                      imageUrl={
                        item?.poster_path || item?.backdrop_path
                          ? `https://image.tmdb.org/t/p/w780${
                              item?.poster_path ?? item?.backdrop_path
                            }`
                          : null
                      }
                      genre={
                        item.genre_ids
                          ?.map(
                            (id: number) =>
                              categories.find(category => category.id === id)
                                ?.name,
                          )
                          .find(
                            (name: string | undefined) => name !== undefined,
                          ) // Get only the first non-undefined genre name
                      }
                    />
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
              />
            </>
          )}
        </View>
      ) : (
        <CategoryViewCard loading={loading} categories={categories} />
      )}
    </ScreenWrapper>
  );
};
