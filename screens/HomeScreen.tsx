// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to EcoCollect</Text>
      <Text style={styles.subtitle}>Manage waste, earn badges, and climb the ranks!</Text>

      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Map')}
        >
          <Text style={styles.menuText}>🗺 View Map</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('AddReport')}
        >
          <Text style={styles.menuText}>➕ Add Report</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('History')}
        >
          <Text style={styles.menuText}>📜 History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.menuText}>👤 Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#f8f8f8' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#4CAF50', textAlign: 'center' },
  subtitle: { fontSize: 14, textAlign: 'center', color: '#666', marginBottom: 30 },
  menu: { marginTop: 20 },
  menuItem: {
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  menuText: { color: '#fff', fontSize: 18 },
});

export default HomeScreen;