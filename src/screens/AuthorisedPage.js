import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';



export default function AuthorizedPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    if (!isvalidateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (!isChecked) {
      alert('Please accept the terms and conditions');
      return;
    }

    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');

      if (email === storedUsername && password === storedPassword) {
        alert('Login successful');
        navigation.navigate('GreetingScreen', { username: email });
      } else {
        Alert.alert(
          'Registration',
          'The email address is not registered. Do you want to register now?',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Register', onPress: handleRegister },
          ]
        );
      }
    } catch (error) {
      console.error('Error retrieving stored credentials:', error);
    }
  };

  const handleRegister = async () => {
    // Perform registration logic here
  };

  const isvalidateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const toggleCheckbox = () => {
    setChecked(!isChecked);
  };

  return (
    <ImageBackground source={require('../../assets/background.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.message}>Login / Sign up</Text>
        <Text style={styles.subMessage}>Allow a more personalized experience...</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={(text) => setPassword(text)}
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.passwordVisibilityButton} onPress={togglePasswordVisibility}>
            <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'} size={20} color="gray" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.disclaimer}>
          *If the email address is not in our database, we will create a new account for you
        </Text>
        <View style={styles.termsContainer}>
          <CheckBox
            checked={isChecked}
            onPress={toggleCheckbox}
            checkedColor="black"
            size={20}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon="checkbox-blank-outline"
          />
          <Text style={styles.termsText}>I agree to the </Text>
          <TouchableOpacity>
            <Text style={[styles.termsText, styles.link]}>terms & conditions</Text>
          </TouchableOpacity>
          <Text style={styles.termsText}> and </Text>
          <TouchableOpacity>
            <Text style={[styles.termsText, styles.link]}>privacy statement</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('WorldMap')}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    color: 'red',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  message: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  subMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
  },
  passwordVisibilityButton: {
    padding: 5,
    marginLeft: -10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
  disclaimer: {
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  termsText: {
    fontSize: 14,
  },
  link: {
    textDecorationLine: 'underline',
  },
  continueButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
});
