import {Fragment} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';

import {useStyles} from './styles';
import {hp} from '@helper';

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
    <TouchableOpacity
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
    </TouchableOpacity>
  );
};
