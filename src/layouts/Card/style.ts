import {StyleSheet} from 'react-native';

import {hp} from '@helper';

export const useStyles = () => {
  const styles = StyleSheet.create({
    cardStyles: {
      flex: 1,
    },
  });

  return {
    styles,
  };
};
