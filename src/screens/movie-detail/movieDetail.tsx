import {DummyImage, PlayIcon} from '@assets';
import {Button, GenreTags, Header, ScreenWrapper} from '@components';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useStyles} from './style';

import {
  useAppNavigation,
  useAppRoute,
  useMoviesDetails,
  useWatchNavigation,
  useWatchRoute,
} from '@hooks';
import {useEffect} from 'react';

export const MovieDetail = () => {
  const {params} = useAppRoute();
  const movieId = params!.movieId;
  const navigation = useAppNavigation();
  const {styles, white} = useStyles();

  const {
    getMovieDetails,
    movieDetails,
    loading,
    getMovieVideos,
    trailerVideo,
    BtnLoading,
  } = useMoviesDetails();
  useEffect(() => {
    (async () => {
      if (!movieId) return;
      await getMovieDetails(movieId);
    })();
  }, [movieId]);

  if (loading) {
    return (
      <ScreenWrapper>
        <ActivityIndicator />
      </ScreenWrapper>
    );
  }

  const CategoryText = ({title}: {title: string}) => {
    return <Text style={[styles.title, styles.categoryTitle]}>{title}</Text>;
  };

  return (
    <View style={styles.mainWrapper}>
      <ImageBackground
        source={
          movieDetails?.poster_path || movieDetails?.backdrop_path
            ? {
                uri: `https://image.tmdb.org/t/p/w780${
                  movieDetails?.poster_path ?? movieDetails?.backdrop_path
                }`,
              }
            : DummyImage
        }
        resizeMode="cover"
        style={styles.imageStyles}>
        <View style={styles.headerContainer}>
          <Header
            title="Watch"
            isAlignedStart
            onPress={() => navigation.goBack()}
            backgroundColor="transparent"
            iconColor={white}
            textColor={white}
          />
        </View>

        <View style={styles.contentContainerView}>
          <Text style={styles.title}>
            {`In theaters ${new Date(
              movieDetails ? movieDetails.release_date : new Date(),
            ).toDateString()}`}
          </Text>

          <Button
            onPress={() => {
              navigation.navigate('seat-selection');
            }}
            title={'Get Tickets'}
            fullWidth
          />

          <Button
            onPress={async () => {
              await getMovieVideos(movieId);
            }}
            title={'Watch Trailer'}
            hasIcon
            isHollow
            fullWidth
            loading={BtnLoading}
            Icon={() => <PlayIcon color={'#F6F6FA'} />}
          />
        </View>
      </ImageBackground>

      <View style={styles.detailsContainer}>
        <ScrollView
          style={styles.detailsContainer}
          showsVerticalScrollIndicator={false}>
          {movieDetails && movieDetails?.genres?.length > 0 && (
            <View style={styles.genreView}>
              <CategoryText title="Genres" />
              <GenreTags data={movieDetails?.genres} />
            </View>
          )}
          <View>
            <CategoryText title="Overview" />
            <Text style={styles.overViewText}>{movieDetails?.overview}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
