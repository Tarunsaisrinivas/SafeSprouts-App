import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen";
import Signup from "./screens/Signup";
import GeoLocation from "./screens/GeoLocation";
import LoginForm from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import Settings from "./components/Settings";
import ChildTrack from "./screens/ChildTrack";
import SoundPlayer from "./screens/Sound";
import { Button } from "react-native";
import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons'; // Import necessary icons

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function DashboardTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Dashboard"
          component={DashboardStack}
          options={{
            tabBarLabel: "Dashboard",
            tabBarLabelStyle: { color: "#023e8a" },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome name="dashboard" size={24} color="#023e8a" />
              ) : (
                <AntDesign name="dashboard" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Child Track"
          component={ChildTrack}
          options={{
            tabBarLabel: "ChildTrack",
            tabBarLabelStyle: { color: "#023e8a" },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="settings" size={24} color="#023e8a" />
              ) : (
                <Ionicons name="settings-outline" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  function DashboardStack() {
    const Stack = createNativeStackNavigator();

    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={() => ({
            headerShown: false,
           
          })}
        />
        <Stack.Screen
          name="ChildTrack"
          component={ChildTrack}
          options={({ navigation }) => ({
            headerShown: false,
            headerRight: () => (
              <Button
                onPress={() => handleLogout(navigation)}
                title="Logout"
                color="#023e8a"
              />
            ),
          })}
        />
        <Stack.Screen
          name="Sound"
          component={SoundPlayer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  const handleLogout = (navigation) => {
    // Implement your logout logic here
    // For example, navigate to the login screen
    navigation.navigate('Login');
  };

  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#023e8a" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            title: "SIGNUP",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#023e8a" },
          }}
        />
        <Stack.Screen
          name="GeoLocation"
          component={GeoLocation}
          options={({ navigation }) => ({
            title: "",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#023e8a" },
            headerRight: () => (
              <Button
                onPress={() => handleLogout(navigation)}
                title="Logout"
                color="#023e8a"
              />
            ),
          })}
        />
        <Stack.Screen
          name="Login"
          component={LoginForm}
          options={{
            title: "LOGIN",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#023e8a" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
