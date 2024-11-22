import {createStackNavigator} from '@react-navigation/stack';

import {Watch, SearchMovies, SearchResults} from '@screens';

const Stack = createStackNavigator();

export function WatchStack() {
  return (
    <Stack.Navigator initialRouteName="watch">
      <Stack.Screen name="watch" component={Watch} />
      <Stack.Screen name="searchMovies" component={SearchMovies} />
      <Stack.Screen name="searchResults" component={SearchResults} />
    </Stack.Navigator>
  );
}
