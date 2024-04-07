import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PlaceDetail from "../Components/PlaceDetail";
import MapScreen from "./TabScreens/Map";


export default function PlaceNavigation(){
  const Stack=createStackNavigator();
  return(
   
     <Stack.Navigator screenOptions={{
      gestureEnabled: true,
      
     }}
     >
     <Stack.Screen 
      name='Map' component={MapScreen}/> 
      <Stack.Screen name='place-detail' component={PlaceDetail} 
      options={{
        presentation: 'modal',
        headerShown: false,
      }}
        
      />
     </Stack.Navigator>
   
  )
}