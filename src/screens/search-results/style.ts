import {COLORS, horizontalSpace} from '@constants';
import {hp, wp} from '@helper';
import {Platform, StyleSheet} from 'react-native';

export const useStyles = () => {
  const black = COLORS.black;

  const styles = StyleSheet.create({
    contentView: {
      flex: 1,
      marginTop: hp(1),
      paddingHorizontal: horizontalSpace,
      backgroundColor: COLORS.silver,
      paddingTop: hp(2),
    },

    itemCard: {
      width: wp(22),
      height: hp(30),
      borderRadius: hp(5),
      marginHorizontal: wp(0.5),
    },
    itemText: {
      fontSize: hp(4),
    },
    contentContainerStyle: {
      paddingBottom: hp(5),
    },
  });

  return {
    styles,
    black,
  };
};
