// screens/SignupScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import styles from '../AppStyles';
import { StackNavigationProp } from '@react-navigation/stack';

type SignupScreenProps = {
  navigation: StackNavigationProp<any>;
};

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSignup = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={{ width: 100, height: 100 }} />
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

export default SignupScreen;