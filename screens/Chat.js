import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { auth, firestore, database} from '../FirebaseConfig'; // Import Firebase authentication and Firestore
import { GiftedChat } from 'react-native-gifted-chat';
import SignInScreen from './SingInScreen';

export default function Chat() {
  const [user, setUser] = useState(null); // State to hold the authenticated user
  const [messages, setMessages] = useState([]);

  // Initialize Firebase authentication
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  useLayoutEffect(() => {
    const collectionRef = collection(database, 'chats');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          _id: doc.id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    }, (error) => {
      console.error('Error fetching messages:', error);
    });
    return () => unsubscribe();
  }, []);

  const onSend = useCallback((messages = []) => {
    const { text, user } = messages[0];
    const createdAt = messages[0].createdAt || serverTimestamp(); // Use server timestamp if createdAt is not provided
    const _id = Math.random().toString(36).substring(7); // Generate a unique message ID

    const newMessage = {
      _id,
      text,
      createdAt,
      user,
    };

    addDoc(collection(database, 'chats'), newMessage)
      .catch(error => {
        console.error('Error sending message:', error);
      });

    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessage));
  }, []);

  if (!user) {
    // If user is not authenticated, you can redirect to login or show a login screen
    return <Text style={{ textAlign: 'center', padding: 20, fontFamily:'TowntixFontBold' }} onPress={() => SignInScreen()}
    >Sign in with Google</Text>;
  }

  return (
    <GiftedChat
      scrollToBottom={true}
      showUserAvatar={true}
      renderUsernameOnMessage={true}
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: user.uid,
        avatar: user.photoURL || 'https://i.pravatar.cc/300', // Provide a fallback avatar URL
        name: user.displayName || 'Unknown User', // Provide a fallback display name
      }}
      messageContainerStyle={{
        backgroundColor: '#fff',
        borderRadius: 5,
        margin: 5,
      }}
    />
  );
}
