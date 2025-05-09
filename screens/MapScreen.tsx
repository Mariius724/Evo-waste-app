// screens/MapScreen.tsx
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { collectionPoints } from '../mockData';

const MapScreen = () => {
  return (
    <View>
      <Text>Collection Points</Text>
      <FlatList
        data={collectionPoints}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10, padding: 10, borderWidth: 1 }}>
            <Text>Location: {item.location}</Text>
            <Text>Accepted Waste: {item.type}</Text>
            <Text>Status: {item.status}</Text>
            <Text>Distance: {item.distance}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MapScreen;