import {COLORS, FONTS} from '@constants';
import {hp, rfs, wp} from '@helper';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    doneButton: {
      position: 'absolute',
      overflow: 'visible',
      bottom: hp(8),
      right: wp(2),
      alignSelf: 'center',
      zIndex: 2,
      padding: hp(1),
      backgroundColor: 'white',
      borderRadius: 5,
    },
    doneButtonText: {
      fontFamily: FONTS.POPPINS_SEMIBOLD,
      color: COLORS.black,
      fontSize: rfs(2),
    },
    videoContainer: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return {styles};
};
