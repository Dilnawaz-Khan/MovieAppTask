import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Dashboard, MediaLibrary, More} from '@screens';
import {WatchStack} from '../stack/watch-stack';
import {Tabbar} from '@components';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBar={props => <Tabbar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
        }}
      />
      <Tab.Screen
        name="watchStack"
        component={WatchStack}
        options={{
          tabBarLabel: 'Watch',
        }}
      />
      <Tab.Screen
        name="mediaLibrary"
        component={MediaLibrary}
        options={{
          tabBarLabel: 'Media Library',
        }}
      />
      <Tab.Screen
        name="more"
        component={More}
        options={{
          tabBarLabel: 'More',
        }}
      />
    </Tab.Navigator>
  );
};
