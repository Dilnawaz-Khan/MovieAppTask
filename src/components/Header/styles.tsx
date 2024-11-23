import {COLORS, FONTS, horizontalSpace} from '@constants';
import {hp, rfs, wp} from '@helper';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const iconSize = hp(3);
  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: COLORS.white,
      paddingTop: hp(2),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: hp(2),
      paddingHorizontal: horizontalSpace,
    },
    title: {
      fontFamily: FONTS.POPPINS_MEDIUM,
      fontSize: rfs(1.8),
      color: '#202C43',
    },
    headerContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    subTitle: {
      fontFamily: 'Poppins-Medium',
      fontSize: hp(3),
      color: COLORS.black,
    },
  });

  return {
    styles,
    iconSize,
  };
};
