import {COLORS, FONTS, horizontalSpace} from '@constants';
import {hp, rfs, wp} from '@helper';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = StyleSheet.create({
    cardContainer: {
      flex: 1,
      paddingHorizontal: horizontalSpace,
    },
    Card: {
      height: hp(20),
      width: '100%',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    imageStyle: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      resizeMode: 'cover',
      borderRadius: hp(1),
      overflow: 'hidden',
    },
    movieNameContainer: {
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      paddingVertical: hp(1),
      paddingHorizontal: hp(2),
      justifyContent: 'center',
    },

    title: {
      fontFamily: FONTS.POPPINS_SEMIBOLD,
      fontSize: rfs(2.8),
      color: COLORS.white,
      // lineHeight: 22.5,
    },
  });

  return {
    styles,
  };
};
