import {apiClient} from '@api';
import {Header, MovieCard, ScreenWrapper, WatchHeader} from '@components';
import {useAppNavigation, useWatch, useWatchNavigation} from '@hooks';
import {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {useStyles} from './style';
import {wp} from '@helper';

export const Watch = () => {
  const {styles} = useStyles();
  const navigation = useAppNavigation();

  const {
    loading,
    initialLoading,
    movies,
    totalPages,
    fetchNext,
    handleLoadMore,
  } = useWatch();

  const verticalRef = useRef(0);
  const [toggleSearchInput, setToggleSearchInput] = useState(true);

  const handleScroll = (event: any) => {
    const currentVerticalPos = event.nativeEvent.contentOffset.y;
    if (currentVerticalPos <= 0) {
      setToggleSearchInput(true);
    } else if (Math.abs(currentVerticalPos - verticalRef.current) > 10) {
      setToggleSearchInput(currentVerticalPos < verticalRef.current);
      verticalRef.current = currentVerticalPos;
    }
  };

  const renderFooter = () => {
    return loading && totalPages > fetchNext ? (
      <View style={{padding: 10}}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  return (
    <ScreenWrapper>
      <WatchHeader />
      {initialLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          data={movies}
          onScroll={handleScroll}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          contentContainerStyle={styles.listContainer}
          ListHeaderComponent={() => <View style={styles.headerContainer} />}
          ListFooterComponent={renderFooter}
          renderItem={({item}) => (
            <MovieCard
              title={item?.title}
              uri={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
              onPress={() =>
                navigation.navigate('movie-detail', {movieId: item.id})
              }
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </ScreenWrapper>
  );
};
