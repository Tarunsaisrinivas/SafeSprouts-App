import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Text, Button, Dimensions } from "react-native"; // Import Button from react-native

import * as Location from "expo-location";

export default function GeoLocation() {
  try {
    const [mapRegion, setMapRegion] = useState({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });

    const userLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
      });
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      console.log(location.coords.latitude, location.coords.longitude);
    };

    useEffect(() => {
      userLocation();
    }, []);

    return (
      <View style={styles.container}>
        <MapView style={styles.map} region={mapRegion}>
          <Marker coordinate={mapRegion} title="Marker" />
        </MapView>
        <Button title="Get Location" onPress={userLocation} />
      </View>
    );
  } catch (err) {
    return <Text>{err}</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    zIndex: 99,
  },
  map: {
    width: '100%',
    borderRadius:25,
    height: 300,
  },
});
