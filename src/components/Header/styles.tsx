import {COLORS} from '@constants';
import {hp, wp} from '@helper';
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
      paddingHorizontal: wp(2),
    },
    title: {
      fontFamily: 'Poppins-Medium',
      fontSize: hp(4),
      color: COLORS.white,
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
