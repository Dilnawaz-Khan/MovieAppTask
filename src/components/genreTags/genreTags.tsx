import {FlatList, Text, View} from 'react-native';

import {useStyles} from './style';
import {Genre} from '@types';

const itemColors = ['#15D2BC', '#E26CA5', '#564CA3', '#CD9D0F'];

type GenreTagsProps = {
  data: Genre[];
};

export const GenreTags = ({data}: GenreTagsProps) => {
  const {styles, conditionBgColor} = useStyles();

  const getItemColor = (index: number) => itemColors[index % itemColors.length];

  const GenreListItem = ({item, index}: {item: Genre; index: number}) => {
    return (
      <View
        style={[styles.item, conditionBgColor(getItemColor(index)).bgColor]}>
        <Text style={styles.title}>{item?.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.mainWrapper}>
      <FlatList
        horizontal
        contentContainerStyle={styles.listGap}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={GenreListItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};
