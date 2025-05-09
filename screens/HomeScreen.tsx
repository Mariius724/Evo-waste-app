// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { userData, collectionPoints } from '../mockData';
import styles from '../AppStyles';

type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total Waste Collected: {userData.totalWeight} kg</Text>
      <Text style={styles.text}>Number of Collection Points: {collectionPoints.length}</Text>
      <Text style={styles.text}>Next Collection: (Simulated Time)</Text>
      <View style={{ marginTop: 20 }}>
        <Button title="View Map" onPress={() => navigation.navigate('Map')} />
        <Button title="Add Collection Report" onPress={() => navigation.navigate('AddReport')} />
        <Button title="View History" onPress={() => navigation.navigate('History')} />
        <Button title="View Profile" onPress={() => navigation.navigate('Profile')} />
      </View>
      </View>
  );
};

export default HomeScreen;