import {
  ImageBackground,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import {Image} from '@components';
import {Card} from '@layouts';
import {DummyImage} from '@assets';
import {useStyles} from './style';
import {hp} from '@helper';

type MovieCardType = {
  uri?: string;
  title?: string;
  onPress: () => void;
  cardStyles?: ViewStyle;
  textStyles?: TextStyle;
};

export const MovieCard: React.FC<MovieCardType> = ({
  uri,
  title,
  onPress,
  textStyles,
}) => {
  const {styles} = useStyles();
  return (
    <Card onPress={onPress} style={[styles.Card, styles.cardContainer]}>
      <ImageBackground
        source={uri ? {uri} : DummyImage}
        resizeMode="cover"
        imageStyle={{borderRadius: hp(1)}}
        style={styles.imageStyle}>
        <View style={styles.movieNameContainer}>
          <Text style={[styles.title, textStyles!]}>{title ?? 'Unknown'}</Text>
        </View>
      </ImageBackground>
    </Card>
  );
};
