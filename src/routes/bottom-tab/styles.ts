import {StyleSheet} from 'react-native';

import {hp} from '@helper';
import {COLORS} from '@constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useStyles = () => {
  const activeTabbarColor = COLORS.white;
  const {bottom} = useSafeAreaInsets();
  const styles = StyleSheet.create({
    tabBarStyles: {
      height: hp(7.5),
      backgroundColor: COLORS.black,
      padding: hp(2),
      borderTopEndRadius: hp(2.7),
      borderTopStartRadius: hp(2.7),
      paddingBottom: bottom,
    },
    tabBarLabelStyle: {
      bottom: hp(1),
    },
  });
  return {
    styles,
    activeTabbarColor,
  };
};
