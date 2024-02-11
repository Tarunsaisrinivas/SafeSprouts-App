import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import Loading from "./Loading";

import * as FileSystem from "expo-file-system";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let errors = {};

    if (!email) errors.email = "email is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setLoading(true);

      const data = {
        email: email,
        password: password,
      };

      axios
        .post("https://confused-coat-bat.cyclic.app/api/auth/login", data)
        .then(async (response) => {
          setLoading(false);
          if (response.data.stat) {
            try {
              const path = FileSystem.documentDirectory + "app-auth.txt";
              await FileSystem.writeAsStringAsync(path, response.data.email);
            } catch (err) {
              console.log(err);
              ToastAndroid.show(
                "Error in saving auth details",
                ToastAndroid.SHORT
              );
            } finally {
              navigation.navigate("Dashboard");
            }
          }
          console.log("Login successful:", response.data);

          setEmail("");
          setPassword("");
          setErrors({});
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error logging in:", error);
        });
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <Image source={require("../assets/Login.png")} style={styles.logo} />
          <TextInput
            style={styles.input}
            placeholder="email@gmail.com"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: "white", fontSize: 18, marginTop: 19 }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#023e8a",
    alignItems: "center",
    // justifyContent: 'center',
    margin: "auto",
  },
  logo: {
    width: 200,
    height: 200,

    resizeMode: "contain",
    marginBottom: 40,
    marginTop: 40,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    color: "#fff",
  },
  button: {
    width: "80%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#023e8a",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 20,
  },
  errorText: {
    color: "#ddd",
    fontWeight: "bold",

    marginBottom: 10,
    fontSize: 18,
  },
});
