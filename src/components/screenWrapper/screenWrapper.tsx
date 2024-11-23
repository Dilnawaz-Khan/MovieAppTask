import {SafeAreaView, ViewStyle} from 'react-native';

import {useStyles} from './style';
import {FC, PropsWithChildren} from 'react';

type ScreenWrapperProps = PropsWithChildren & {
  style?: ViewStyle;
};

export const ScreenWrapper: FC<ScreenWrapperProps> = ({
  children,
  style,
}): React.ReactElement => {
  const {styles} = useStyles();
  return (
    <SafeAreaView style={[styles.mainWrapper, style]}>{children}</SafeAreaView>
  );
};
