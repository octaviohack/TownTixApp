// UserProfileScreen.js

import React from 'react';
import { View, Text, Image, StyleSheet, Button, Linking } from 'react-native';

const UserProfileScreen = ({ user }) => {

  
  
  const handleViewTerms = () => {
    // Replace 'https://example.com/terms' with the actual URL of your terms and conditions
    4
  };
  
  return (
    <View style={styles.container}>
      {user && user.photoURL ? (
        <Image source={{ uri: user.photoURL }} style={styles.profileImage} />
      ) : null}
      <Text style={styles.text}>Name: {user && user.displayName ? user.displayName : 'N/A'}</Text>
      <Text style={styles.text}>Email: {user && user.email ? user.email : 'N/A'}</Text>
      
      {/* Button to view terms and conditions */}
      <Button title="View Terms and Conditions" onPress={handleViewTerms} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default UserProfileScreen;
