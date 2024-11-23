import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Dashboard, MediaLibrary, More} from '@screens';
import {WatchStack} from '../stack/watch-stack';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="dashboard" component={Dashboard} />
      <Tab.Screen name="watchStack" component={WatchStack} />
      <Tab.Screen name="mediaLibrary" component={MediaLibrary} />
      <Tab.Screen name="more" component={More} />
    </Tab.Navigator>
  );
};
