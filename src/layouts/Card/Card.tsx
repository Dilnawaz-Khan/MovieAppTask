import {type PropsWithChildren} from 'react';
import {Pressable, PressableProps, StyleProp, ViewStyle} from 'react-native';

import {useStyles} from './style';

type CardProps = PropsWithChildren &
  PressableProps & {
    style: StyleProp<ViewStyle>;
  };

export const Card = ({children, onPress, style}: CardProps) => {
  const {styles} = useStyles();
  return (
    <Pressable onPress={onPress} style={[styles.cardStyles, style]}>
      {children}
    </Pressable>
  );
};
