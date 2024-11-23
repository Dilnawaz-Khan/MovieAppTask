import {Fragment} from 'react';
import {ActivityIndicator, Pressable, Text, View} from 'react-native';

import {hp} from '@helper';
import {useStyles} from './styles';

type ButtonProps = {
  isHollow?: boolean;
  onPress: () => void;
  fullWidth?: boolean;
  title: string;
  hasIcon?: boolean;
  Icon?: React.FC<{width?: number; height?: number; color?: string}>;
  loading?: boolean;
};

export const Button = ({
  onPress,
  title,
  isHollow,
  Icon,
  hasIcon,
  loading,
  fullWidth,
}: ButtonProps) => {
  const {styles} = useStyles();
  const ICONSIZE = hp(10);

  return (
    <Pressable
      onPress={onPress}
      disabled={loading}
      style={styles({isHollow, fullWidth}).wrapper}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Fragment>
          {hasIcon && Icon && (
            <View style={styles({}).iconView}>
              <Icon height={ICONSIZE} width={ICONSIZE} />
            </View>
          )}
          <Text style={styles({}).title}>{title}</Text>
        </Fragment>
      )}
    </Pressable>
  );
};
