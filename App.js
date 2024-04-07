import "react-native-gesture-handler";
import Navigation from "./Navigation";
import SignInScreen from "./screens/SingInScreen";
import React, { useState, useEffect } from 'react';
import * as AuthSession from 'expo-auth-session';
import{
  GoogleAuthProvider,
  initializeAuth,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from "./FirebaseConfig";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { ActivityIndicator, View } from "react-native";
import { useFonts } from 'expo-font';
import Toast from "react-native-toast-message";



WebBrowser.maybeCompleteAuthSession();




export default function App() { 
  
  const [fontsLoaded, fontError] = useFonts({ // here we are loading the fonts
    'TowntixFont': require('./assets/fonts/Outfit-Regular.ttf'),
    'TowntixFontBold': require('./assets/fonts/Outfit-Bold.ttf'),
    'TowntixFontLight': require('./assets/fonts/Outfit-Light.ttf'),
    'TowntixFontMedium': require('./assets/fonts/Outfit-SemiBold.ttf'),
  });  
   
  

  const [userInfo, setUserInfo] = React.useState(null);  
  const [loading, setLoading] = React.useState(false);

  
  
  const [request, response, promptAsync] = Google.useAuthRequest ({ // here we are using the google auth request
    iosClientId: 
    "1042550631797-1bsnh70anucl8vos5hcd6go26uc2meve.apps.googleusercontent.com",
    androidClientId: 
    "1042550631797-qlt4uqke5516q8pmkdljq3rl21atr4l9.apps.googleusercontent.com",
  });

  

  

  const getLocalUserInfo = async () => { // here we are getting the user info from the local storage
    try {
      const userJSON = await AsyncStorage.getItem('@user');
      const userData = userJSON ? JSON.parse(userJSON) : null;

      if (userData && typeof userData === 'object' && 'displayName' in userData && 'email' in userData && 'photoURL' in userData) {
        setUserInfo(userData);
      } else {
        console.log('User data is incomplete or missing necessary properties.');
      }
    } catch (error) {
      console.error('Error getting user info from local storage:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocalUserInfo();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await AsyncStorage.setItem('@user', JSON.stringify(user));
        setUserInfo(user);
      } else {
        setUserInfo(null);
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => { // here we are handling the google sign in
    const handleGoogleSignIn = async () => {
      if (response?.type === 'success') {
        const { authentication } = response;
        try {
          const credential = GoogleAuthProvider.credential(authentication.idToken);
          await signInWithCredential(auth, credential);
        } catch (error) {
          console.error('Error signing in with Google credential:', error);
        }
      }
    };

    handleGoogleSignIn();
  }, [response]);


  useEffect(() => {
  // Show welcome back toast when user logs in
  if (userInfo) {
    Toast.show({
      type: 'success',
      text1: 'Welcome back!',
      text2: userInfo.displayName,
      visibilityTime: 4000,
      position: 'top',
    });
  }
}, [userInfo]);

   if (loading) return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size={"large"} />
    </View>
  );
  return userInfo ? <Navigation user={userInfo} /> : <SignInScreen promptAsync={promptAsync} />;


}


