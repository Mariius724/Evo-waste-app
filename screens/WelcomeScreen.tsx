import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

type WelcomeScreenProps = {
  navigation: StackNavigationProp<any>; // Replace 'any' with your param list
};

const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>EcoCollect</Text>
      <Text style={styles.subtitle}>Your Waste Management Companion</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.outlineButton]}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={[styles.buttonText, styles.outlineText]}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  logo: { width: 120, height: 120, marginBottom: 20 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#4CAF50' },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 40 },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: { color: '#fff', fontSize: 16, textAlign: 'center' },
  outlineButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  outlineText: {
    color: '#4CAF50',
  },
});

export default WelcomeScreen;

