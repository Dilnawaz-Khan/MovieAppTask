import {StyleSheet} from 'react-native';

import {COLORS} from '@constants';
import {wp} from '@helper';

export const useStyles = () => {
  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
      backgroundColor: COLORS.white,
    },
  });

  return {
    styles,
  };
};
