import {FC} from 'react';
import {Pressable, TextInput, TouchableOpacity, View} from 'react-native';

import {CloseIcon, SearchIcon} from '@assets';
import {useStyles} from './styles';

type SearchInputTypes = {
  value: string;
  onChangeValue: (value: string) => void;
  onSearch: () => void;
  onCancel?: () => void;
};

export const SearchInput: FC<SearchInputTypes> = ({
  value,
  onChangeValue,
  onSearch,
  onCancel,
}) => {
  const {styles, iconColor, iconSize, grayColor} = useStyles();

  return (
    <View style={styles.containerView}>
      <View style={styles.inputContainer}>
        <View style={styles.IconView}>
          <SearchIcon height={iconSize} width={iconSize} color={iconColor} />
        </View>
        <TextInput
          value={value}
          onChangeText={onChangeValue}
          style={styles.textInput}
          onSubmitEditing={onSearch}
          returnKeyType="go"
          placeholderTextColor={grayColor}
          placeholder="TV shows, movies and more"
        />
      </View>
      <Pressable onPress={onCancel} style={styles.IconView}>
        <CloseIcon height={iconSize} width={iconSize} color={iconColor} />
      </Pressable>
    </View>
  );
};
