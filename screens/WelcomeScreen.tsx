import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from '../AppStyles';
import { StackNavigationProp } from '@react-navigation/stack';

type WelcomeScreenProps = {
  navigation: StackNavigationProp<any>; // Replace 'any' with your param list
};

const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={{ width: 100, height: 100 }} />
      <Text>Welcome to Waste Management App</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

export default WelcomeScreen;
