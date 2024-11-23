import {COLORS} from '@constants';
import {hp, wp} from '@helper';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = ({
    isHollow,
    fullWidth,
  }: {
    isHollow?: boolean;
    fullWidth?: boolean;
  }) =>
    StyleSheet.create({
      wrapper: {
        flexDirection: 'row',
        height: hp(5),
        width: fullWidth ? wp(60) : wp(26),
        backgroundColor: isHollow ? 'transparent' : COLORS.skyBlue,
        borderRadius: hp(1),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: isHollow ? hp(0.3) : 0,
        borderColor: COLORS.skyBlue,
      },
      iconView: {
        marginRight: hp(2),
      },
      title: {
        fontFamily: 'Poppins-SemiBold',
        color: COLORS.silver,
        letterSpacing: 0.5,
      },
    });
  return {
    styles,
  };
};
