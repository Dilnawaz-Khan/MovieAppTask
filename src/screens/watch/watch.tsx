import {useWatchNavigation} from '@hooks';
import {View, Text} from 'react-native';

export const Watch = () => {
  const navigation = useWatchNavigation();
  return (
    <View>
      <Text onPress={() => navigation.navigate('search-movies')}>Watch</Text>
    </View>
  );
};
