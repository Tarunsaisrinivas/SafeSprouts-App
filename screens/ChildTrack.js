import { StyleSheet, Text, View, Switch } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import Settings from "../components/Settings";

const ChildTrack = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Set Up</Text>
        <Settings />
      </View>

      <View style={styles.locationContainer}>
        <View style={styles.locationTextContainer}>
          <EvilIcons name="location" size={24} color="black" />
          <View style={styles.textContent}>
            <Text style={styles.locationText}>Location</Text>
            <Text style={styles.additionalContent}>Some content here</Text>
          </View>
        </View>
        <Text style={styles.setupText}>Setup</Text>
      </View>

      <View style={styles.locationContainer}>
        <View style={styles.locationTextContainer}>
          <EvilIcons name="location" size={24} color="black" />
          <Text style={styles.locationText}>Turn On Location</Text>
        </View>
        <Switch />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    justifyContent: "space-between",
  },
  locationTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    marginLeft: 10,
  },
  additionalContent: {
    marginLeft: 10,
    color: "gray",
  },
  setupText: {
    marginLeft: 10,
  },
});

export default ChildTrack;
