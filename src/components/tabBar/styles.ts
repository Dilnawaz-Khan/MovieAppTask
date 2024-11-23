import {StyleSheet} from 'react-native';

import {hp, rfs} from '@helper';
import {COLORS, FONTS} from '@constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useStyles = () => {
  const activeTabbarColor = COLORS.white;
  const {bottom} = useSafeAreaInsets();

  const iconColor = (active: boolean) => (active ? COLORS.white : COLORS.gray);
  const iconSize = hp(2.5);

  const conditionalLabelStyle = (active: boolean) =>
    StyleSheet.create({
      label: {
        fontSize: rfs(1.4),
        color: active ? COLORS.white : COLORS.gray,
        fontFamily: FONTS.POPPINS_MEDIUM,
      },
    });

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: hp(8.5),
      backgroundColor: COLORS.black,
      borderTopEndRadius: hp(2.7),
      borderTopStartRadius: hp(2.7),
      paddingTop: hp(2.4),
      paddingBottom: bottom,
    },
    tabBarStyles: {
      flex: 1,
      alignItems: 'center',
      gap: hp(0.8),
    },
    tabBarLabelStyle: {
      color: COLORS.white,
    },
    activeTab: {},
    activeTabText: {},
  });
  return {
    styles,
    activeTabbarColor,
    iconColor,
    iconSize,
    conditionalLabelStyle,
  };
};
