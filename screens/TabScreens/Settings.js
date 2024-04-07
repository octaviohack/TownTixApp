import React, { useState, useEffect } from 'react';
import { Text, View, Button, Alert, Image, TouchableOpacity, Linking } from 'react-native';
import { signOut } from '@firebase/auth';
import { auth } from '../../FirebaseConfig';  
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

4

export default function Settings() {
  const [userDisplayName, setUserDisplayName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhotoURL, setUserPhotoURL] = useState(null);

  useEffect(() => {
    // Load user data from AsyncStorage
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem("@user");
      if (userData !== null) {
        const { displayName, email, photoURL } = JSON.parse(userData);
        setUserDisplayName(displayName);
        setUserEmail(email);
        setUserPhotoURL(photoURL);
      }
    } catch (error) {
      console.error("Error loading user data:", error);
    }
  };

  const handleSignOut = async () => {
    Alert.alert(
      "Sign Out",
      "Are you sure you want to sign out?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Sign out canceled"),
          style: "cancel"
        },
        { text: "OK", onPress: async () => {
          await signOut(auth);
          await AsyncStorage.removeItem("@user");
          // Navigate to SignIn screen
          navigator.navigate('SignIn');
        }}
      ],
      { cancelable: false }
    );
  };

  const handleViewTerms = () => {
    // Display terms and conditions (You can replace this with your actual terms and conditions)
    Linking.openURL('https://example.com/terms');
  };

  return (
    <View>
      <View style={{ padding: 20, alignItems: 'center', justifyContent: 'center', fontFamily:'TowntixFontBold',}}
      >
        {/* Display User Photo */}
        {userPhotoURL ? (
          <Image
            source={{ uri: userPhotoURL }}
            style={{ width: 150, height: 150, borderRadius: 99, marginBottom: 10, alignItems: 'center'}}
          />
        ) : (
          <View style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center' }}>
            <Text>No Photo</Text>
          </View>
        )}
        <View style={{ height: 1, backgroundColor: 'lightgray', marginBottom: 10 }} />
        {/* Display User Display Name */}
        <Text style={{ fontFamily:'TowntixFontBold', fontSize:17 }}>
        User Name: {userDisplayName}</Text>
        {/* Display User Email */}
        <Text style={{ fontFamily:'TowntixFontBold', fontSize:17  }}>
        Email: {userEmail}</Text>
        {/* Buttons */}
         <View/>
        <View style={{ marginTop: 20, fontFamily:'TowntixFontBold', fontSize:17, color: 'tomato'}}
        >
        <Button title="View Terms and Conditions" onPress={handleViewTerms} />
        </View>
        <TouchableOpacity onPress={handleSignOut}>
          <Text style={{ color: 'tomato', marginTop: 20, fontFamily:'TowntixFontBold', fontSize:20  }}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
