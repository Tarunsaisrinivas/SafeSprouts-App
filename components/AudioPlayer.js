import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const AudioPlayer = () => {
  const [sound, setSound] = useState(null);
  const audioFile = require('../assets/file_example_MP3_700KB.mp3');

  // Function to handle the play action
  const handlePlayAudio = async () => {
    try {
      if (sound === null) {
        const { sound: audioSound } = await Audio.Sound.createAsync(audioFile);
        setSound(audioSound);
        await audioSound.playAsync();
        console.log('Sound played successfully');
      } else {
        await sound.replayAsync(); // If sound is already loaded, replay it
      }
    } catch (error) {
      console.log('Failed to play the sound', error);
    }
  };

  // Function to handle the pause action
  const handlePauseAudio = async () => {
    try {
      if (sound !== null) {
        await sound.pauseAsync();
        console.log('Sound paused successfully');
      }
    } catch (error) {
      console.log('Failed to pause the sound', error);
    }
  };

  return (
    <React.Fragment>
      <TouchableOpacity style={styles.button} onPress={handlePlayAudio}>
        <Text style={styles.buttonText}>Play Audio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePauseAudio}>
        <Text style={styles.buttonText}>Pause Audio</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default AudioPlayer;
