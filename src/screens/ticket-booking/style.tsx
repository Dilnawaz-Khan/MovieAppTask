import {COLORS} from '@constants';
import {hp, rfs, wp} from '@helper';
import {Platform, StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = StyleSheet.create({
    contentView: {
      flex: 1,
      justifyContent: 'center',
    },
    upperContent: {
      // top: -hp(30),
      flexDirection: 'row',
      alignItems: 'center',
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
      bottom: hp(6),
      alignItems: 'center',
      justifyContent: 'space-evenly',
      right: 0,
      left: 0,
    },
    payView: {
      backgroundColor: COLORS.silver,
      paddingHorizontal: wp(2),
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: hp(1),
      borderRadius: hp(3),
    },
    priceText: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: hp(4),
    },
    priceLabel: {
      fontFamily: 'Poppins-Regular',
      fontSize: rfs(2),
    },
    numTexts: {
      fontFamily: 'Poppins-Regular',
      fontSize: rfs(2.5),
    },
    seatItem: {
      flexDirection: 'row',

      height: hp(8),
      width: wp(15),
      marginHorizontal: wp(2),
      marginVertical: hp(1),
      alignItems: 'center',
      // justifyContent:'space-evenly'
    },
    seatItemText: {
      fontFamily: 'Poppins-Medium',
      fontSize: rfs(3),
      marginLeft: hp(2),
      color: COLORS.gray,
    },
    footerContentView: {
      paddingHorizontal: wp(1),
    },
    rowDetails: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      bottom: -hp(20),
      marginHorizontal: wp(3),
      paddingHorizontal: wp(3),
      borderRadius: hp(3),
      paddingVertical: hp(2),
      backgroundColor: COLORS.silver,
    },
    crossText: {
      fontSize: hp(4),

      marginLeft: hp(2),
    },
    numList: {
      flex: 0.1,
      paddingTop: hp(15),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return {
    styles,
  };
};
