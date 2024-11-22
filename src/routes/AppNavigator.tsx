import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Dashboard, MediaLibrary, More} from '@screens';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Screen name="dashboard" component={Dashboard} />
      <Stack.Screen name="mediaLibrary" component={MediaLibrary} />
      <Stack.Screen name="more" component={More} />
    </NavigationContainer>
  );
};
