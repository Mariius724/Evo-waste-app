// screens/ProfileScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { userData } from '../mockData';
import Badge from '../components/Badge'; // Assuming Badge component is created similar to progress bar

const ProfileScreen = () => {
  return (
    <View>
      <Text>Username: {userData.username}</Text>
      <Text>Total Reports: {userData.totalReports}</Text>
      <Text>Total Waste Collected: {userData.totalWeight} kg</Text>
      <Text>Current Rank: Eco-Citizen</Text> {/* This can be dynamically derived based on userData */}
      
      <Text>Your Badges:</Text>
      {userData.badges.map((badge, index) => (
        <Badge key={index} badgeName={badge} />
      ))}

      <Button title="See How to Progress" onPress={() => alert('Instructions for Progressing')} />
    </View>
  );
};

export default ProfileScreen;