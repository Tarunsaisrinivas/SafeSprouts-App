import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const LastSeen = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 

    return () => clearInterval(timerID);
  }, []); 

  // Extract hours and minutes from the current time
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  // Format hours and minutes with leading zeros if needed
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return (
        <>
        <Text style={styles.lseen}>Last Seen</Text>
       <View style={styles.container}>
        <View style={styles.card}>
        <Entypo name="home" size={24} color="#3a86ff" />
          <Text style={styles.heading}>Home</Text>
          <Text>{formattedHours}:{formattedMinutes}</Text>
        </View>
        <View style={styles.card}>
        <FontAwesome5 name="school" size={24} color="#3a86ff" />
          <Text style={styles.heading}>School</Text>
          <Text>{formattedHours}:{formattedMinutes}</Text>
  
        </View>
      
      </View>
      </>
  )
}

export default LastSeen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lseen:{
    fontSize:20,
    marginLeft:13,
    fontWeight:'bold',
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

})