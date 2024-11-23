import {StyleSheet} from 'react-native';

import {COLORS, FONTS, horizontalSpace} from '@constants';
import {hp, rfs} from '@helper';

export const useStyles = () => {
  const blackColor = COLORS.black;
  const iconSize = hp(6);
  const styles = StyleSheet.create({
    wrapper: {
      height: hp(8),
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: horizontalSpace,
      alignItems: 'center',
      backgroundColor: COLORS.white,
    },
    title: {
      fontFamily: FONTS.POPPINS_MEDIUM,
      fontSize: rfs(2.2),
      color: COLORS.black,
    },
  });

  return {
    styles,
    blackColor,
    iconSize,
  };
};
