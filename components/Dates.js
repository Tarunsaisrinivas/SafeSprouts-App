import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const Dates = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [show,setShow] = useState('')
  const generateDatesForMonth = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    const datesForMonth = [];
    for (let i = 1; i <= currentDay; i++) {
      const date = new Date(currentYear, currentMonth, i);
      datesForMonth.push({
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        date: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' }),
      });
    }
    return datesForMonth;
  };

  const handleMonth = () =>{
    setShow(!show);
  }

  const handleDateSelect = (item) => {
    setSelectedDate(item.date);
    // Add logic to display related content for the selected date
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, selectedDate === item.date && styles.selectedCard]}
      onPress={() => handleDateSelect(item)}
    >
      <Text style={styles.month} onPress={handleMonth}>{item.month}</Text>
    
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.day}>{item.day}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={generateDatesForMonth()}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
  {show && 
      <View>
        <Text style={{fontSize:50}}> hi{currentMonth}</Text>
      </View>

      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    height: 100,
    backgroundColor: '#333',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  selectedCard: {
    backgroundColor: 'blue',
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  day: {
    fontSize: 18,
    marginTop: 5,
    color: '#fff',
  },
  month: {
    fontSize:19,
    color: '#fff',
  },
});

export default Dates;
