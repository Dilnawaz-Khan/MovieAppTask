import {FlatList, View} from 'react-native';

import {Header, ScreenWrapper, SearchResultCard} from '@components';
import {useAppNavigation, useWatchNavigation, useWatchRoute} from '@hooks';
import {useStyles} from './style';

export const SearchResults = () => {
  const {params} = useWatchRoute();
  const watchNavigation = useWatchNavigation();
  const appNavigation = useAppNavigation();
  const movies = params?.movies ?? [];
  const categories = params?.categories ?? [];

  const {styles} = useStyles();

  const getGenreName = (ids: number[]) => {
    const genre =
      ids
        ?.map(
          (id: number) => categories.find(category => category.id === id)?.name,
        )
        .find((name: string | undefined) => name !== undefined) ?? 'unknown';

    return genre;
  };

  return (
    <ScreenWrapper>
      <Header
        isAlignedStart
        onPress={() => watchNavigation.goBack()}
        title={`${movies?.length} Results Found`}
      />
      <View style={styles.contentView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={movies}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({item}: {item: any}) => (
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
          )}
        />
      </View>
    </ScreenWrapper>
  );
};
