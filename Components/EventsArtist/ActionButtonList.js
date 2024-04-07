import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Linking, Share, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Animated, Easing } from "react-native";
import { useRef } from "react";
import MapView from "react-native-maps";
import { Dimensions } from "react-native";
import { Marker } from "react-native-maps";


export default function ActionButtonList({events}) {
  const [isLiked, setIsLiked] = useState(false);

  const spinValue = useRef(new Animated.Value(0)).current;

  const origin = {
    latitude: 53.347837,
    longitude: -6.259436,
  };
  

  const spinAnimation = () => {
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,

      }
    ).start(() => {
      setIsLiked(!isLiked); // Toggle like status
      spinValue.setValue(0); // Reset spin value
    });
  };


  if (!events || !events.attributes) {
    return null;
  }

  const actionButtonList = [
    {
      id: 1,
      name: 'Like',
      icon: isLiked ? 'heart' : 'heart-outline',
      color: isLiked ? 'red' : 'black',
      action: () => spinAnimation(),
    },
    {
      id: 2,
      name: 'Website',
      icon: 'earth',
      color: 'red',
      action: () => handleWebsiteAction(),
    },
    {
      id: 3,
      name: 'Share',
      icon: 'share',
      color: 'red',
      action: () => handleShareAction(),
    },
    {
      id: 4,
      name: 'Email',
      icon: 'chatbox-ellipses',
      color: 'red',
      action: () => handleEmailAction(),
    },
  ];

  const handleLikeAction = () => {
    setIsLiked(!isLiked); // Toggle like status
  };

  const handleWebsiteAction = () => {
    // Handle website action
    
    // Check if the event has a website
    const website = events.attributes.Website; // Corrected to website attribute
    
    // If website is available, open it
    if (website) {
      console.log(website); // Logging website URL for debugging purposes
      alert(website);
    } else {
      console.log("No website available for this event");
      // You can show a message or handle this case as per your application's logic
    }
  };


  
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });
  

  const handleShareAction = () => {
    // Handle share action
    console.log("Share button pressed");
    // Example: Share event
    Share.share({ subject: 'Check out this event',
      message: ` ${events.attributes.Name} at ${events.attributes.date}`,
      
    });
  };

  const handleEmailAction = () => {
    // Handle email action
    console.log("Email button pressed");
    
    // Example: Open email client with pre-filled email
    const email = `${events.attributes.Email}`;
    const subject = "New message from the app TownTix";
    const body = "Hi, I would like to know more about the event.";
    
    Linking.openURL(`https://${email}`);
  };
  

  return (
    <View>
      <FlatList
        data={actionButtonList}
        columnWrapperStyle={{ justifyContent: 'space-between', flex: 1, margin: 5 }}
        numColumns={4}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ alignItems: 'center' }} onPress={item.action}>
             <Animated.View style={{ transform: [{ rotate: spin }], backgroundColor: 'white', borderRadius: 10, alignItems: 'center', padding: 10, width: 60, height: 65 }}>
              <Ionicons name={item.icon} size={25} color={item.color} />
              <Text style={{ fontFamily: 'TowntixFont', fontSize: 11, color: 'grey', marginTop: 5 }}>{item.name}</Text>
            </Animated.View>
          </TouchableOpacity>
        )}
      />
    
        <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.0943,
            longitudeDelta: 0.0434,
          }}
        >
          <Marker 
            coordinate={{
              latitude: events.attributes.latitude,
              longitude: events.attributes.longitude,
            }}
            
            title={events.attributes.Address} 
            description={events.attributes.Name}
          />
        </MapView>
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({

  map: {
   
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    fontFamily: 'TowntixFont', fontSize: 10, color: 'grey',
  
    
  },
  });