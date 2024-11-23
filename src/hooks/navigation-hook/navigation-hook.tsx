import {
  useNavigation,
  NavigationProp,
  useRoute,
  RouteProp,
} from '@react-navigation/native';

import {RootStackParamList, WatchStackParamList} from '@types';

export function useAppNavigation() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return navigation;
}

export function useWatchNavigation() {
  const navigation = useNavigation<NavigationProp<WatchStackParamList>>();

  return navigation;
}

/*Route hooks*/
export function useAppRoute<T extends keyof RootStackParamList>() {
  const route = useRoute<RouteProp<RootStackParamList, T>>();

  return route;
}

export function useWatchRoute<T extends keyof WatchStackParamList>() {
  const route = useRoute<RouteProp<WatchStackParamList, T>>();

  return route;
}
