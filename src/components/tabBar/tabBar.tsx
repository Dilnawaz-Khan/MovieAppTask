import {Pressable, StyleSheet, Text, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {DashboardIcon, MediaIcon, MoreIcon, WatchIcon} from '@assets';
import {useStyles} from './styles';

export function Tabbar({state, navigation, descriptors}: BottomTabBarProps) {
  const {styles, iconColor, iconSize, conditionalLabelStyle} = useStyles();
  const handleTabPress = (routeIndex: number) => {
    const selectedRouteName = state.routes[routeIndex].name;
    navigation.navigate(selectedRouteName);
  };

  const tabIcon = (name: string, isFocused: boolean) => {
    switch (name) {
      case 'dashboard':
        return (
          <DashboardIcon
            width={iconSize}
            height={iconSize}
            color={iconColor(isFocused)}
          />
        );
      case 'watchStack':
        return (
          <WatchIcon
            width={iconSize}
            height={iconSize}
            color={iconColor(isFocused)}
          />
        );
      case 'mediaLibrary':
        return (
          <MediaIcon
            width={iconSize}
            height={iconSize}
            color={iconColor(isFocused)}
          />
        );
      case 'more':
        return (
          <MoreIcon
            width={iconSize + 5}
            height={iconSize + 5}
            color={iconColor(isFocused)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index: number) => {
        const {options} = descriptors[route.key];
        // Get tabBarLabel or fallback to route name
        const label = options.tabBarLabel ? options.tabBarLabel : route.name;
        const isFocused = state.index === index;
        const onPress = () => handleTabPress(index);
        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            style={[styles.tabBarStyles, isFocused && styles.activeTab]}>
            {tabIcon(route.name, isFocused)}
            <Text style={conditionalLabelStyle(isFocused).label}>
              {label as string}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
