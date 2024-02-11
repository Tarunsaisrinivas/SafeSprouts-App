import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Head from "../components/Head";
import Settings from "../components/Settings";
import LastSeen from "../components/LastSeen";
import Notification from "../components/Notification";

const Dashboard = () => {
  return (
    <ScrollView style={styles.container} horizontal={false}>
      <View >
        <View style={{display:'flex',flexDirection:'row'}}>
        <Text style={styles.Text}>Overview</Text>
        <Settings />
        </View>
        <Head />
        <LastSeen />
        <Notification />
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  Text:{
    fontSize:30,
    paddingLeft:20,
    fontWeight:'bold',
  },
});
