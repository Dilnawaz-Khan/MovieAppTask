import {Dots, DummyImage} from '@assets';
import {Card} from '@layouts';
import {Text, View} from 'react-native';
import {useStyles} from './style';
import {FC} from 'react';
import {Image} from '../image/image';

type SearchResultCardType = {
  imageUrl?: string | null;
  title?: string;
  onPress?: () => void;
  genre?: string;
};

export const SearchResultCard: FC<SearchResultCardType> = ({
  title,
  onPress,
  imageUrl,
  genre,
}) => {
  const {styles, iconSize} = useStyles();
  return (
    <Card style={styles.wrapper} onPress={onPress}>
      <View>
        <Image
          source={imageUrl ? {uri: imageUrl} : DummyImage}
          style={styles.image}
          resizeMode={'cover'}
        />
      </View>
      <View style={styles.contentView}>
        <View style={styles.tilesView}>
          <Text style={styles.titleText}>{title ?? 'Unknown'} </Text>
          <Text style={styles.categoryText}>{genre ?? 'unknown'} </Text>
        </View>
        <Dots height={iconSize} width={iconSize} />
      </View>
    </Card>
  );
};
