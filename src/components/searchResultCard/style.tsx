import {COLORS} from '@constants';
import {hp, wp} from '@helper';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      marginVertical: hp(0.5),
      marginHorizontal: wp(1),
    },

    contentView: {
      flex: 1,
      marginLeft: wp(2),
      alignItems: 'center',

      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    tilesView: {
      flex: 0.8,
      paddingHorizontal: wp(3),
    },
    titleText: {
      marginVertical: hp(1),
      fontFamily: 'Poppins-Medium',
      fontSize: hp(4),
      color: COLORS.black,
    },
    categoryText: {
      fontFamily: 'Poppins-Medium',
      fontSize: hp(3),
      color: COLORS.gray,
    },
    image: {
      height: hp(25),
      width: wp(15),
      borderRadius: hp(3),
    },
  });

  return {
    styles,
  };
};
