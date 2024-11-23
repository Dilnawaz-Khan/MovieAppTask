import {COLORS, FONTS} from '@constants';
import {hp, rfs, wp} from '@helper';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const borderRadius = hp(1);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: hp(11),
      borderRadius: hp(1),
      overflow: 'hidden',
    },
    overlay: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      paddingBottom: 5,
      paddingLeft: 5,
    },
    title: {
      fontFamily: FONTS.POPPINS_MEDIUM,
      fontSize: rfs(1.9),
      color: COLORS.white,
    },
  });

  return {
    styles,
    borderRadius,
  };
};
