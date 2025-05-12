// screens/MapScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 48.8566,
          longitude: 2.3522,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {/* Example Collection Points */}
        <Marker
          coordinate={{ latitude: 48.857, longitude: 2.351 }}
          title="Recycling Bin"
          description="Glass, Paper, Plastic"
          pinColor="green"
        />
        <Marker
          coordinate={{ latitude: 48.855, longitude: 2.354 }}
          title="Reported Trash"
          description="Overflowing bin"
          pinColor="red"
        />
        {/* Add more mock markers as needed */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default MapScreen;