import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const Signup = ({navigation}) => {
  const [name,setName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if(password !== confirmPassword) errors.confirmPassword='Passwords do not match';
    if (!email) errors.email = "email is required";
    if (!name) errors.name = "name is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const data = {
        name : name,
        email: email,
        password: password
      };

      axios.post('https://confused-coat-bat.cyclic.app/api/auth/signup', data)
        .then(response => {
          console.log('Signup successful:', response.data);
          setEmail("");
          setName("");
          setPassword("");
          setConfirmPassword("");
          setErrors({});
          navigation.navigate('Login');
          // Redirect or navigate to another screen if needed
          // navigation.navigate('SuccessScreen');
        })
        .catch(error => {
          console.error('Error signing up:', error);
          // Handle error and display appropriate message to the user
        });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image source={require('../assets/Signup.png')} style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder="email@gmail.com"
          placeholderTextColor="#ccc" 
          value={email}
          onChangeText={text => setEmail(text)}
        />
       
        <TextInput
          style={styles.input}
          placeholder="name"
          placeholderTextColor="#ccc" 
          value={name}
          onChangeText={text => setName(text)}
        />
    
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc" 
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
      
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#ccc" 
          secureTextEntry
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
        />
        {errors.confirmPassword ? (
          <Text style={styles.errorText}>{errors.confirmPassword}</Text>
        ) : null}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text style={{color:'white',fontSize:18,marginTop:19}}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#023e8a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 250, 
    resizeMode: 'contain',
    marginBottom: 40,
    marginTop: 40,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    color: '#fff',
  },
  button: {
    width: '80%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#023e8a',
    fontWeight:'bold',
    fontStyle:'italic',
    fontSize: 20,
  },
  errorText: {
    color: "#ddd",
    fontWeight:'bold',
    marginBottom: 3,
    fontSize:18,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
