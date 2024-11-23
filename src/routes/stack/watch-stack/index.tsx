import {createStackNavigator} from '@react-navigation/stack';

import {Watch, SearchMovies, SearchResults} from '@screens';
import {WatchStackParamList} from '@types';

const Stack = createStackNavigator<WatchStackParamList>();

export function WatchStack() {
  return (
    <Stack.Navigator
      initialRouteName="watch"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="watch" component={Watch} />
      <Stack.Screen name="search-movies" component={SearchMovies} />
      <Stack.Screen name="search-results" component={SearchResults} />
    </Stack.Navigator>
  );
}
