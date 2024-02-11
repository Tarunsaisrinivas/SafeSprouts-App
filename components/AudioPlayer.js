import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const AudioPlayer = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioFile = require('../assets/file_example_MP3_700KB.mp3');


  const handlePlayPauseAudio = async () => {
    try {
      if (sound === null) {
        const { sound: audioSound } = await Audio.Sound.createAsync(audioFile);
        setSound(audioSound);
        await audioSound.playAsync();
        setIsPlaying(true);
        console.log('Sound played successfully');
      } else {
        if (isPlaying) {
          await sound.pauseAsync();
          setIsPlaying(false);
          console.log('Sound paused successfully');
        } else {
          await sound.playAsync();
          setIsPlaying(true);
          console.log('Sound resumed successfully');
        }
      }
    } catch (error) {
      console.log('Failed to play/pause the sound', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePlayPauseAudio}>
      <Text style={styles.buttonText}>{isPlaying ? 'STOP' : 'SOS'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 50,
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
