import TrackPlayer from 'react-native-track-player';

export default async function TrackPlayerInit() {
  await TrackPlayer.setupPlayer();
}
