import {View, Text, ImageBackground} from 'react-native';
import {useStyles} from './style';

type GenreCardProps = {
  title: string;
  poster: string;
};

export function GenreCard({title, poster}: GenreCardProps) {
  const {styles, borderRadius} = useStyles();
  return (
    <ImageBackground
      borderRadius={borderRadius}
      source={{uri: poster}}
      style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </ImageBackground>
  );
}
