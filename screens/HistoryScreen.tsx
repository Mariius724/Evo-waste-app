// screens/HistoryScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


// Simulated past reports (in a real app, you'd fetch this)
const mockReports = [
  { id: '1', description: 'Plastic bottles near the park', type: 'Plastic', date: '2025-05-01' },
  { id: '2', description: 'Overflowing bin on Main St', type: 'Mixed', date: '2025-04-28' },
  { id: '3', description: 'Broken glass on sidewalk', type: 'Glass', date: '2025-04-25' },
];

const HistoryScreen = () => {
  const renderItem = ({ item }: { item: typeof mockReports[0] }) => (
    <View style={styles.card}>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.details}>Type: {item.type}</Text>
      <Text style={styles.details}>Date: {item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Waste Reports</Text>
      <FlatList
        data={mockReports}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#f8f8f8' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#4CAF50', marginBottom: 20, textAlign: 'center' },
  list: { paddingBottom: 20 },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  description: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  details: { fontSize: 14, color: '#555' },
});
export default HistoryScreen;