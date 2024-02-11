import { StyleSheet, Switch, Text, View } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

const Notification = () => {
  const [isSwitchOn1, setIsSwitchOn1] = useState(false);
  const [isSwitchOn2, setIsSwitchOn2] = useState(false);

  const toggleSwitch = () => {
    setIsSwitchOn1(previousState => !previousState);
  };
  const toggleSwitch1 = () => {
    setIsSwitchOn2(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notification</Text>
      <View style={styles.notificationItem}>
        <View style={styles.notificationContent}>
          <AntDesign name="home" size={24} color="#fff" style={styles.icon} />
          <View>
            <Text style={styles.notificationText}>Leaves Home</Text>
            <Text style={styles.timeText}>8:00 AM</Text>
            <Text style={styles.additionalContent}>Some additional matter here</Text>
          </View>
        </View>
        <Switch
          value={isSwitchOn1}
          onValueChange={toggleSwitch}
        />
      </View>
      <View style={styles.notificationItem}>
        <View style={styles.notificationContent}>
          <AntDesign name="home" size={24} color="#fff" style={styles.icon} />
          <View>
            <Text style={styles.notificationText}>Leaves Home</Text>
            <Text style={styles.timeText}>8:00 AM</Text>
            <Text style={styles.additionalContent}>Some additional matter here</Text>
          </View>
        </View>
        <Switch
          value={isSwitchOn2}
          onValueChange={toggleSwitch1}
        />
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#023e8a',
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
  },
  notificationText: {
    fontSize: 18,
    marginBottom: 5,
  },
  timeText: {
    fontSize: 16,
    marginBottom: 5,
    color:'gray',
  },
  additionalContent: {
    fontSize: 16,
    color: 'gray',
  },
});
