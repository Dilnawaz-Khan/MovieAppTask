import {COLORS, FONTS, horizontalSpace} from '@constants';
import {hp, rfs, wp} from '@helper';
import {Platform, StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = StyleSheet.create({
    searchContainerView: {
      paddingTop: hp(1),
      paddingHorizontal: horizontalSpace,
      alignItems: 'center',
      marginBottom: hp(1),
    },
    contentView: {
      flex: 1,
      top: hp(1),
      backgroundColor: COLORS.silver,
      paddingHorizontal: horizontalSpace,
      paddingTop: hp(2),
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
      justifyContent: 'center',
      height: hp(4),
      marginBottom: hp(1),
      marginHorizontal: horizontalSpace,
      borderBottomWidth: 0.5,
      borderColor: COLORS.silver,
    },
    topResults: {
      fontFamily: FONTS.POPPINS_MEDIUM,
      fontSize: rfs(1.6),
      color: '#202C43',
      height: hp(3),
    },
    contentContainerStyle: {
      paddingBottom: hp(5),
    },
  });

  return {
    styles,
  };
};
