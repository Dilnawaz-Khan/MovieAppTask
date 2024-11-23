import {StyleSheet} from 'react-native';

import {COLORS, FONTS} from '@constants';
import {hp} from '@helper';

export const useStyles = () => {
  const iconColor = COLORS.black;
  const iconSize = hp(5);
  const grayColor = COLORS.gray;

  const styles = StyleSheet.create({
    containerView: {
      flexDirection: 'row',
      backgroundColor: COLORS.silver,
      padding: hp(0.5),
      alignItems: 'center',
      borderRadius: hp(8),
    },
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    IconView: {
      marginRight: hp(1),
    },
    textInput: {
      fontFamily: FONTS.POPPINS_LIGHT,
      color: COLORS.black,
    },
  });

  return {
    styles,
    iconColor,
    iconSize,
    grayColor,
  };
};
