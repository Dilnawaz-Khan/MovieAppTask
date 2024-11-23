import {COLORS} from '@constants';
import {hp, wp} from '@helper';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = StyleSheet.create({
    contentContainer: {
      flex: 1,
    },
    separator: {
      height: hp(2),
    },
    headerContainer: {
      paddingTop: hp(2),
      backgroundColor: COLORS.silver,
    },
    listContainer: {
      backgroundColor: COLORS.silver,
      // flex: 1,
    },
  });
  return {
    styles,
  };
};
