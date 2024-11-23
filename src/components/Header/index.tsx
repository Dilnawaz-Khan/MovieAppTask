import {Text, TouchableOpacity, View} from 'react-native';

import {FC} from 'react';
import {BackIcon, SearchIcon} from '@assets';
import {useStyles} from './styles';
import {hp} from '@helper';

type HeaderProps = {
  title?: string;
  Icon?: FC<{width?: number; height?: number; color?: string}>;
  onPress?: () => void;
  isAlignedStart?: boolean;
  backgroundColor?: string;
  subtitle?: string;
};

export const Header: FC<HeaderProps> = ({
  title,
  Icon,
  onPress,
  isAlignedStart,
  backgroundColor,
  subtitle,
}) => {
  const {styles, iconSize} = useStyles();

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPress}>
        {Icon ? (
          <Icon height={iconSize} width={iconSize} color={backgroundColor} />
        ) : (
          <BackIcon
            height={iconSize}
            width={iconSize}
            color={backgroundColor}
          />
        )}
      </TouchableOpacity>
      <View
        style={[
          styles.headerContent,
          {
            alignItems: isAlignedStart ? 'flex-start' : 'center',
            height: iconSize,
          },
        ]}>
        <View style={{alignItems: isAlignedStart ? 'flex-start' : 'center'}}>
          <Text style={[styles.title]}>{title ?? 'Watch'}</Text>
          {subtitle && (
            <Text style={[styles.subTitle]}>{subtitle ?? 'Watch'}</Text>
          )}
        </View>
      </View>
    </View>
  );
};
