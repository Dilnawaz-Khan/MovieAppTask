import {COLORS, FONTS, horizontalSpace} from '@constants';
import {hp, rfs, wp} from '@helper';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useStyles = () => {
  const {top, bottom} = useSafeAreaInsets();

  const white = COLORS.white;
  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
    },

    headerContainer: {
      marginTop: top - 20,
    },
    genreView: {
      // flex: 1,
      borderBottomWidth: 1,
      borderColor: COLORS.silver,
    },

    detailsContainer: {
      height: hp(30),
      padding: hp(2),
      paddingBottom: bottom,
    },
    imageStyles: {
      flex: 2,
    },
    contentContainerView: {
      width: '100%',
      position: 'absolute',
      bottom: 0,
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: hp(1),
      paddingVertical: hp(2),
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    ContentWrapper: {
      marginVertical: hp(1),
    },
    title: {
      fontFamily: FONTS.POPPINS_SEMIBOLD,
      fontSize: rfs(2),
      color: COLORS.white,
    },
    categoryTitle: {
      color: '#202C43',
      marginVertical: hp(1),
    },
    overViewText: {
      fontFamily: FONTS.POPPINS_REGULAR,
      fontSize: rfs(1.9),
      textTransform: 'capitalize',
    },

    video: {
      width: '100%',
      height: 300,
    },
  });

  return {
    styles,
    white,
  };
};
