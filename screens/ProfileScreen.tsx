// screens/ProfileScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native';
const ProfileScreen = () => {
  // Simulated data
  const user = {
    name: 'Eco Hero',
    rank: 'Intermediate',
    badge: '♻️ Eco Saver',
    reportsSubmitted: 12,
    nextRank: 'Advanced',
    progress: '60%',
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>

      <View style={styles.card}>
        <Text style={styles.label}>👤 Name:</Text>
        <Text style={styles.value}>{user.name}</Text>

        <Text style={styles.label}>🎖 Current Rank:</Text>
        <Text style={styles.value}>{user.rank}</Text>

        <Text style={styles.label}>🏅 Badge:</Text>
        <Text style={styles.value}>{user.badge}</Text>

        <Text style={styles.label}>📊 Reports Submitted:</Text>
        <Text style={styles.value}>{user.reportsSubmitted}</Text>

        <Text style={styles.label}>🚀 Progress to {user.nextRank}:</Text>
        <Text style={styles.value}>{user.progress}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#f0f9f1' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#4CAF50', textAlign: 'center', marginBottom: 24 },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  label: { fontSize: 16, fontWeight: '600', marginTop: 12, color: '#333' },
  value: { fontSize: 16, marginTop: 4, color: '#4CAF50' },
});

export default ProfileScreen;