import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

import NoteManager from"./src/utils/note-manager.util"

export default function App() {
  const [sound, setSound] = React.useState<Audio.Sound>();
  const noteManager : NoteManager = new NoteManager()
 

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={noteManager.playSound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent : 'center',
  },
})