import {COLORS, FONTS, horizontalSpace} from '@constants';
import {hp, rfs, wp} from '@helper';
import {Platform, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useStyles = () => {
  const {bottom} = useSafeAreaInsets();
  const iconSize = hp(4);
  const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: hp(1.6),
    },
    screenTitle: {
      flex: 1,
      alignItems: 'center',
      gap: hp(0.3),
      marginRight: hp(3),
    },
    title: {
      fontFamily: FONTS.POPPINS_MEDIUM,
      fontSize: rfs(2),
      color: '#202C43',
    },
    subTitle: {
      fontFamily: FONTS.POPPINS_SEMIBOLD,
      fontSize: rfs(1.7),
      color: COLORS.skyBlue,
    },
    contentView: {
      paddingHorizontal: horizontalSpace,
    },
    upperContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: hp(1),
    },
    itemCard: {
      backgroundColor: COLORS.white,
      width: wp(22),
      height: hp(30),
      borderRadius: hp(5),
      marginHorizontal: wp(0.5),
    },
    itemText: {
      fontSize: hp(4),
    },

    footer: {
      position: 'absolute',
      flexDirection: 'row',
      bottom: bottom,
      alignItems: 'center',

      paddingHorizontal: horizontalSpace,
      gap: hp(2),
    },
    payView: {
      backgroundColor: COLORS.silver,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: wp(5),
      paddingVertical: hp(1),
      borderRadius: hp(1.4),
    },
    priceText: {
      fontFamily: FONTS.POPPINS_SEMIBOLD,
      fontSize: rfs(1.8),
    },
    priceLabel: {
      fontFamily: FONTS.POPPINS_REGULAR,
      fontSize: rfs(1.3),
    },
    numTexts: {
      fontFamily: FONTS.POPPINS_REGULAR,
      fontSize: rfs(1.5),
    },
    seatItem: {
      flexDirection: 'row',
      flex: 1,

      alignItems: 'center',
    },
    seatItemText: {
      fontFamily: FONTS.POPPINS_MEDIUM,
      fontSize: rfs(1.3),
      marginLeft: hp(2),
      color: COLORS.gray,
    },
    footerContentView: {
      paddingHorizontal: wp(1),
    },
    rowDetails: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: wp(30),
      borderRadius: hp(1.4),
      paddingVertical: hp(0.6),
      paddingHorizontal: hp(1.2),
      backgroundColor: COLORS.silver,
      marginTop: hp(4),
    },
    crossText: {
      fontSize: rfs(3),
    },
    numberListContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    numList: {
      flex: 0.1,
      justifyContent: 'center',
      // alignItems: 'center',
    },
    selectSeatBtn: {
      flex: 1,
      paddingHorizontal: wp(4),
      paddingVertical: hp(1.6),
      borderRadius: hp(1.4),
      backgroundColor: COLORS.skyBlue,
      justifyContent: 'center',
      alignItems: 'center',
    },

    btnText: {
      fontFamily: FONTS.POPPINS_MEDIUM,
      fontSize: rfs(1.8),
      color: '#fff',
    },
  });

  return {
    styles,
    iconSize,
  };
};
