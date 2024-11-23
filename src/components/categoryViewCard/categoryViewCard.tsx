import {ActivityIndicator, FlatList, View} from 'react-native';
import {MovieCard} from '../movieCard/movieCard';

import {useStyles} from './style';
import {GenreCard} from '../genreCard/genreCard';
import {GenreDetails} from '@types';

type CategoryViewCard = {
  loading: boolean;
  categories: GenreDetails[];
};

export const CategoryViewCard = ({loading, categories}: CategoryViewCard) => {
  const {styles} = useStyles();
  return (
    <View style={styles.contentView}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          numColumns={2}
          columnWrapperStyle={{gap: 10}}
          data={categories}
          renderItem={({item}) => {
            return <GenreCard title={item.name} poster={item.imageUrl} />;
          }}
        />
      )}
    </View>
  );
};
