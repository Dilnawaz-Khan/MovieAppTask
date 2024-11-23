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
  iconColor?: string;
  textColor?: string;
};

export const Header: FC<HeaderProps> = ({
  title,
  Icon,
  onPress,
  isAlignedStart,
  backgroundColor,
  subtitle,
  iconColor,
  textColor,
}) => {
  const {styles, iconSize, iconColor: staticColor} = useStyles();

  return (
    <View style={[styles.wrapper, {backgroundColor}]}>
      <TouchableOpacity onPress={onPress}>
        {Icon ? (
          <Icon height={iconSize} width={iconSize} color={backgroundColor} />
        ) : (
          <BackIcon
            height={iconSize}
            width={iconSize}
            color={iconColor ?? staticColor}
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
          <Text style={[styles.title, {color: textColor}]}>
            {title ?? 'Watch'}
          </Text>
          {subtitle && (
            <Text style={[styles.subTitle]}>{subtitle ?? 'Watch'}</Text>
          )}
        </View>
      </View>
    </View>
  );
};
