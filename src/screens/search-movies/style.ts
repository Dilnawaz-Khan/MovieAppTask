import {COLORS, horizontalSpace} from '@constants';
import {hp, wp} from '@helper';
import {Platform, StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = StyleSheet.create({
    searchContainerView: {
      paddingTop: hp(1),
      paddingHorizontal: horizontalSpace,
      alignItems: 'center',
      paddingBottom: hp(6),
    },
    contentView: {
      flex: 1,
      top: hp(3),
    },
    IconView: {
      flex: 0.1,
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
    categoryHeader: {
      marginTop: hp(5),
      height: hp(8),
      marginBottom: hp(2),
      marginHorizontal: wp(2),
      borderBottomWidth: 0.5,
      borderColor: COLORS.silver,
    },
    contentContainerStyle: {
      paddingBottom: hp(5),
    },
  });

  return {
    styles,
  };
};
