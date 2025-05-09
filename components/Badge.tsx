// components/Badge.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Badge = ({ badgeName }: { badgeName: string }) => {
  return (
    <View style={styles.badge}>
      <Text>{badgeName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
  },
});

export default Badge;