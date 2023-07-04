import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = ({ name, password }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <Text style={styles.label}>Nickname:</Text>
      <Text style={styles.value}>{name}</Text>
      <Text style={styles.label}>Password:</Text>
      <Text style={styles.value}>{password}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default Profile;
