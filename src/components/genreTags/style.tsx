import {StyleSheet} from 'react-native';

import {COLORS, FONTS} from '@constants';
import {hp, rfs, wp} from '@helper';

export const useStyles = () => {
  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
      paddingBottom: hp(2),
    },
    item: {
      paddingVertical: hp(0.5),
      paddingHorizontal: wp(3),
      borderRadius: hp(5),
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontFamily: FONTS.POPPINS_MEDIUM,
      // fontSize: rfs(1.6),
      color: COLORS.white,
    },
    listGap: {
      gap: hp(0.3),
    },
  });

  const conditionBgColor = (color: string = COLORS.cyan) =>
    StyleSheet.create({
      bgColor: {
        backgroundColor: color,
      },
    });

  return {
    styles,
    conditionBgColor,
  };
};
