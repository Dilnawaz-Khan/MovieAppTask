import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {useStyles} from './style';

export const Trailer = () => {
  const route: any = useRoute();
  const navigation: any = useNavigation();
  const {styles} = useStyles();
  const [BtnVisibility, setBtnVisibility] = useState(false);
  const [loading, setLoading] = useState(true);
  const key = route.params?.trailerKey;

  useEffect(() => {
    if (!key) {
      navigation.goBack();
    }
  }, [key, navigation]);

  const handleDonePress = () => {
    navigation.goBack();
  };

  const onStateChange = useCallback(
    (state: string) => {
      console.log('state', state);

      switch (state) {
        case 'unstarted':
          setBtnVisibility(false);

          break;
        case 'buffering':
          setBtnVisibility(true);
          break;
        case 'playing':
          setLoading(false);
          setBtnVisibility(false);
          break;
        case 'paused':
          setBtnVisibility(true);
          break;
        case 'ended':
          navigation.goBack();
          break;
        default:
          setLoading(false);
          setBtnVisibility(true);
      }
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      {BtnVisibility && (
        <Pressable style={styles.doneButton} onPress={handleDonePress}>
          <Text style={styles.doneButtonText}>Mark As Watched</Text>
        </Pressable>
      )}

      <View style={styles.videoContainer}>
        <YoutubePlayer
          height={Dimensions.get('window').height}
          width={Dimensions.get('window').width}
          videoId={key}
          play
          webViewProps={{
            injectedJavaScript: `
              document.getElementsByClassName('container')[0].style.position = 'unset';
              document.getElementsByClassName('container')[0].style.paddingBottom = 'unset';
              true;
            `,
          }}
          onChangeState={onStateChange}
        />
      </View>
    </View>
  );
};
