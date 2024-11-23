import {COLORS} from '@constants';
import {hp, rfs, wp} from '@helper';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const iconSize = hp(2);
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      marginVertical: hp(0.5),
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
      fontSize: rfs(1.7),
      color: '#202C43',
    },
    categoryText: {
      fontFamily: 'Poppins-Medium',
      fontSize: rfs(1.5),
      color: COLORS.gray,
    },
    image: {
      height: hp(15),
      width: wp(35),
      borderRadius: hp(1),
    },
  });

  return {
    styles,
    iconSize,
  };
};
