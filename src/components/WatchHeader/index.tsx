import {Pressable, Text, View} from 'react-native';

import {useWatchNavigation} from '@hooks';
import {SearchIcon} from '@assets';
import {useStyles} from './styles';

export const WatchHeader = () => {
  const watchNavigation = useWatchNavigation();
  const {styles, blackColor, iconSize} = useStyles();

  const handleOnPress = () => watchNavigation.navigate('search-movies');

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}> Watch</Text>
      <Pressable onPress={handleOnPress}>
        <SearchIcon height={iconSize} width={iconSize} color={blackColor} />
      </Pressable>
    </View>
  );
};
