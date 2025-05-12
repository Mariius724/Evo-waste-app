// screens/AddReportScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddReportScreen = () => {
  const navigation = useNavigation();
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = () => {
    if (!description.trim()) {
      Alert.alert('Error', 'Please enter a description.');
      return;
    }

    console.log('Report submitted:', { description, type });

    Alert.alert('Success', 'Your waste report has been submitted.', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report Waste</Text>

      <TextInput
        style={styles.input}
        placeholder="Describe the waste (e.g., plastic bags, cans)"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Type (optional, e.g., organic, plastic)"
        value={type}
        onChangeText={setType}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Report</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#4CAF50', marginBottom: 20, textAlign: 'center' },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: { color: '#fff', fontSize: 16 },
  link: { color: '#4CAF50', textAlign: 'center', fontSize: 14 },
});

export default AddReportScreen;