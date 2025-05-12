// screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, Alert, GestureResponderEvent } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { Feather } from "@expo/vector-icons";

type LoginScreenProps = {
  navigation: StackNavigationProp<any>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPasssord] = useState(false);


  const handleLogin = () => {
    if (!name.trim() && !password.trim()) {
      Alert.alert('Validation', 'Please enter your name/password.');
      return;
    };

    const togglePasswordVisibility = () => {
      setShowPasssord(!showPassword);
    };
    

    console.log('User logged in:', { name });

    // Navigate to Home
    navigation.navigate('Home');
  }

  function togglePasswordVisibility(event: GestureResponderEvent): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Back to Welcome</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.PasswordVisibility} onPress={togglePasswordVisibility}>
        <Feather name={showPassword ? 'eye' : 'eye-off'} size={20} color="#7C888D"/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#4CAF50', marginBottom: 30, textAlign: 'center' },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  PasswordVisibility: {
    position: "absolute",
    right: 0,
  },
  buttonText: { color: '#fff', fontSize: 16 },
  link: { color: '#4CAF50', textAlign: 'center', fontSize: 14 },
});

export default LoginScreen;