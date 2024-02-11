import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import * as FileSystem from 'expo-file-system';

const HomeScreen = ({ navigation }) => {
 
  const [fileReadError, setFileReadError] = useState(false);

  useEffect(() => {
    const loadFileContents = async () => {
      try {
        const path = FileSystem.documentDirectory + 'app-auth.txt';
        const contents = await FileSystem.readAsStringAsync(path);
        if (contents.trim() !== '') {
          navigation.navigate('Dashboard');
        } else {
          navigation.navigate('Login');
        }
      } catch (error) {
        console.error('Error reading file:', error);
        setFileReadError(true);
      }
    };

    loadFileContents();
  }, []);

 

  return (
    <View style={styles.container}>
      <View style={styles.popup}>
        <Text style={styles.popupText}>Hi, I'm Jarvis!</Text>
      </View>
      <Image source={require('../assets/Logo.png')} style={styles.logo} />
      <Text style={styles.head}>We're going to set up your phone now</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Let's Go !</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.buttonText}>Dashboard !</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#023e8a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 400,
    height: 500,
    resizeMode: 'contain',
  },
  head: {
    color: 'white',
    fontSize: 26,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',

  },
  button: {
    marginTop: 10,
    borderColor: '#023e8a',
    borderWidth: 1,
    borderRadius: 50,
    padding: 8,
    width: 200,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 25,
    color: '#023e8a',
    fontWeight: 'bold',
    fontStyle: 'italic',
   
  },
  popup: {
    padding: 6,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 10,
    backgroundColor: '#0077b6',
    right: 50,
    top: 30,
  },
  popupText: {
    color: 'white',
    fontSize: 30,
    padding: 10,
    fontStyle: 'italic',
  },
});
