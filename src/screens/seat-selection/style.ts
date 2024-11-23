import {COLORS, FONTS, horizontalSpace} from '@constants';
import {hp, rfs, wp} from '@helper';
import {Platform, StyleSheet} from 'react-native';

export const useStyles = () => {
  const iconSize = hp(4);

  const conditionalBgColor = (isActive: boolean) =>
    StyleSheet.create({
      bgColor: {
        backgroundColor: isActive ? COLORS.skyBlue : '#A6A6A61A',
      },
    });

  const styles = StyleSheet.create({
    contentView: {
      flex: 1,
      paddingHorizontal: horizontalSpace,
      paddingTop: hp(15),
      backgroundColor: COLORS.silver,
    },
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

    itemCard: {
      width: wp(22),
      height: hp(30),
      borderRadius: hp(5),
      marginHorizontal: wp(0.5),
    },
    dateText: {
      marginBottom: hp(1),
      fontSize: rfs(2.3),
      fontFamily: FONTS.POPPINS_MEDIUM,
    },
    itemText: {
      fontFamily: FONTS.POPPINS_REGULAR,
      fontSize: rfs(1.8),
    },
    roundView: {
      paddingHorizontal: wp(5),
      paddingVertical: hp(0.7),
      borderRadius: hp(0.8),
    },
    spacer: {
      height: hp(8),
    },
    footer: {
      position: 'absolute',
      bottom: hp(2),
      alignItems: 'center',
      justifyContent: 'center',
      right: 0,
      left: 0,
      marginHorizontal: horizontalSpace,
    },

    selectSeatBtn: {
      width: '100%',
      height: hp(5),
      borderRadius: hp(1),
      backgroundColor: COLORS.skyBlue,
      justifyContent: 'center',
      alignItems: 'center',
    },

    btnText: {
      fontFamily: FONTS.POPPINS_MEDIUM,
      fontSize: rfs(1.8),
      color: '#fff',
    },
    shadow: {
      shadowColor: COLORS.skyBlue,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.3,

      elevation: 13,
    },
  });

  return {
    styles,
    iconSize,
    conditionalBgColor,
  };
};
