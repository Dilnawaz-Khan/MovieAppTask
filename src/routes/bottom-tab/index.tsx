import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {DashboardIcon, MediaIcon, MoreIcon, WatchIcon} from '@assets';
import {Dashboard, MediaLibrary, More} from '@screens';
import {WatchStack} from '../stack/watch-stack';
import {useStyles} from './styles';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  const {styles, activeTabbarColor} = useStyles();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBarStyles,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveTintColor: activeTabbarColor,
      }}>
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <DashboardIcon width={size} height={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="watchStack"
        component={WatchStack}
        options={{
          tabBarLabel: 'Watch',
          tabBarIcon: ({color, size}) => (
            <WatchIcon width={size} height={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="mediaLibrary"
        component={MediaLibrary}
        options={{
          tabBarLabel: 'Media Library',
          tabBarIcon: ({color, size}) => (
            <MediaIcon width={size} height={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="more"
        component={More}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color, size}) => (
            <MoreIcon width={size} height={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
