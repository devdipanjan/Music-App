import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TrackPlayerInit from './TrackPlayerInit';
import TrackPlayer from 'react-native-track-player';

const App = () => {
  useEffect(() => {
    TrackPlayerInit();
  }, []);

  const playMusic = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      id: 'track',
      url: 'URL_TO_YOUR_AUDIO_FILE',
      title: 'Track Title',
      artist: 'Track Artist',
      artwork: 'URL_TO_ARTWORK',
    });
    await TrackPlayer.play();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Minimal Music Player</Text>
      <TouchableOpacity onPress={playMusic} style={{ marginTop: 20 }}>
        <Text>Play Music</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
