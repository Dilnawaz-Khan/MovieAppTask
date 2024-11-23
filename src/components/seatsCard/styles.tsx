import {COLORS, FONTS} from '@constants';
import {hp, rfs, wp} from '@helper';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const seatsSize = wp(45);

  const conditionalBorderColor = (isActive: boolean) =>
    StyleSheet.create({
      borderColor: {
        borderWidth: isActive ? hp(0.25) : 0,
        borderColor: COLORS.skyBlue,
      },
    });

  const styles = StyleSheet.create({
    cardContainer: {
      // marginRight: wp(1),
      gap: hp(1),
    },

    timeNHallContainer: {
      flexDirection: 'row',

      gap: hp(1),
      paddingHorizontal: hp(0.4),
    },

    itemTime: {
      fontFamily: FONTS.POPPINS_MEDIUM,
      fontSize: rfs(1.5),
      color: COLORS.black,
      // marginRight: hp(3),
    },
    itemHall: {
      fontFamily: FONTS.POPPINS_REGULAR,
      fontSize: rfs(1.5),
      color: '#8F8F8F',
    },
    card: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
      backgroundColor: '#fff',
      borderRadius: hp(1.4),
      width: wp(65),
      height: hp(20),
      alignItems: 'center',
      justifyContent: 'center',
    },
    boldText: {
      fontFamily: FONTS.POPPINS_BOLD,
      fontSize: rfs(1.5),
      color: COLORS.black,
    },
    priceContainer: {
      paddingHorizontal: hp(0.4),
      flexDirection: 'row',
      gap: 2,
    },
  });

  return {
    styles,
    seatsSize,
    conditionalBorderColor,
  };
};
