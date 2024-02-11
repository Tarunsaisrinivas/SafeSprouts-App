// import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import React, { useState } from "react";
// import { Entypo } from "@expo/vector-icons";
// import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

// const Settings = () => {
// const [showContent, setShowContent] = useState(false);
// const navigation = useNavigation();

// const handleSetting = () => {
//   setShowContent(!showContent);
// };

//   const navigateToMap= () => {
//     navigation.navigate('GeoLocation');
//   };
//   const navigateToChildTrack = () =>{
//     navigation.navigate('ChildTrack');
//   }

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.settingIcon} onPress={handleSetting}>
//         <Entypo name="menu" size={24} color="#023e8a" />
//       </TouchableOpacity>
//       {showContent && (
//         <View style={styles.contentContainer}>
//           <TouchableOpacity onPress={navigateToChildTrack} >
//             <Text style={styles.options}>Child Track</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={navigateToMap}>
//             <Text style={styles.options}>Map</Text>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Text style={styles.options}>option 3</Text>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Text style={styles.options}>option 4</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// export default Settings;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "flex-end",
//     justifyContent: "center",
//     paddingRight: 10,
//   },
//   settingIcon: {
//     alignItems: "flex-end",
//     margin: 10,
//   },
//   contentContainer: {
//     position: "absolute",
//     top: 45,
//     right: 25,
//     backgroundColor: "white",
//     zIndex: 999,
//     elevation: 15,
//     padding: 30,
//   },
//   options:{
//     fontSize:18,
//     color:'#000',
//     fontWeight:'bold',
//   },
// });
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import * as FileSystem from "expo-file-system";
import AudioPlayer from "./AudioPlayer";

const Settings = () => {
  const [showContent, setShowContent] = useState(false);
  const navigation = useNavigation();

  const handleSetting = () => {
    setShowContent(!showContent);
  };

  const handleLogout = async () => {
    
    const path = FileSystem.documentDirectory + "app-auth.txt";
    try {
      await FileSystem.writeAsStringAsync(path, "");
      navigation.navigate("Home");
      ToastAndroid.show("Logged Out Successfully", ToastAndroid.SHORT);
    } catch (error) {
      console.error("Error writing file:", error);
      ToastAndroid.show("Log Out Error", ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingIcon} onPress={handleLogout}>
        <AntDesign name="logout" size={24} color="#023e8a" />
      </TouchableOpacity>
      <AudioPlayer />
      {/* {showContent && (
        <View style={styles.contentContainer}>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.options}>Logout</Text>
          </TouchableOpacity>
        </View>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 10,
  },
  settingIcon: {
    alignItems: "flex-end",
    margin: 10,
  },
  contentContainer: {
    position: "absolute",
    top: 45,
    right: 25,
    backgroundColor: "#ddd",
    zIndex: 999,
    elevation: 15,
    padding: 10,
  },
  options: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
});

export default Settings;
