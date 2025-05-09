// screens/HistoryScreen.tsx
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { userData } from '../mockData';

const HistoryScreen = () => {
  const reportHistory = [
    { id: '1', date: '2023-10-01', type: 'plastic', location: 'Point A', weight: 5 },
    { id: '2', date: '2023-10-02', type: 'organic', location: 'Point B', weight: 6 },
    // Add more mocked history as necessary
  ];

  return (
    <View>
      <Text>Collection History</Text>
      <FlatList
        data={reportHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10, padding: 10, borderWidth: 1 }}>
            <Text>Date: {item.date}</Text>
            <Text>Waste Type: {item.type}</Text>
            <Text>Location: {item.location}</Text>
            <Text>Estimated Weight: {item.weight} kg</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HistoryScreen;