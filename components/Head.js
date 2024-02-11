import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Head = () => {
  return (
    <ScrollView horizontal={false}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.heading}>Weather</Text>
          <Text style={styles.content}>23 °C</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.heading}>Location</Text>
          <Text style={styles.content}>Connected</Text>
        </View>
      </View>

      <View style={styles.distanceCard}>
          <Text style={styles.distanceHeading}>Distance</Text>
          <Text style={styles.distanceContent}>5 KM</Text>
        </View>


    </ScrollView>
  );
};

export default Head;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 20,
    width: 150,
    height: 100,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    color: 'black',
    paddingBottom:10,
  },
  content: {
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  distanceCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 20,
    width: 300,
    height: 100,
    marginBottom: 20,
    marginLeft:30,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  distanceHeading:{
    fontSize: 20,
    color: 'black',
    paddingBottom:10,
  },
  distanceContent:{
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
