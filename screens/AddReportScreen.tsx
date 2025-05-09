// screens/AddReportScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AddReportScreen = () => {
  const [wasteType, setWasteType] = useState('');
  const [weight, setWeight] = useState('');
  const [location, setLocation] = useState('');

  const handleAddReport = () => {
    // Simulate report submission
    alert(`Report Submitted: ${wasteType}, ${weight}kg at ${location}`);
  };

  return (
    <View>
      <Text>Add Collection Report</Text>
      <TextInput
        placeholder="Type of Waste"
        value={wasteType}
        onChangeText={setWasteType}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Estimated Weight (kg)"
        value={weight}
        onChangeText={setWeight}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Drop-off Location"
        value={location}
        onChangeText={setLocation}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <Button title="Submit Report" onPress={handleAddReport} />
    </View>
  );
};

export default AddReportScreen;