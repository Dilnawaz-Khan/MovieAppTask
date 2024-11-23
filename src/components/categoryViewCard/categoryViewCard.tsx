import {ActivityIndicator, FlatList, View} from 'react-native';
import {MovieCard} from '../movieCard/movieCard';

import {useStyles} from './style';

type CategoryViewCard = {
  loading: boolean;
  categories: any;
};

export const CategoryViewCard = ({loading, categories}: CategoryViewCard) => {
  const {styles} = useStyles();
  return (
    <View style={styles.contentView}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          contentContainerStyle={styles.contentContainerStyle}
          numColumns={2}
          data={categories}
          renderItem={({item}: {item: any}) => {
            return (
              <MovieCard
                title={item?.name}
                uri={item?.imageUrl}
                cardStyles={styles.itemCard}
                onPress={() => undefined}
                textStyles={styles.itemText}
              />
            );
          }}
        />
      )}
    </View>
  );
};
