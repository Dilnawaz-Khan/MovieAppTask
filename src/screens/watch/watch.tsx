import {ScreenWrapper} from '@components';
import {useWatchNavigation} from '@hooks';
import {View, Text, SafeAreaView} from 'react-native';

export const Watch = () => {
  const navigation = useWatchNavigation();
  return (
    <ScreenWrapper>
      <Text onPress={() => navigation.navigate('search-movies')}>Watch</Text>
    </ScreenWrapper>
  );
};
