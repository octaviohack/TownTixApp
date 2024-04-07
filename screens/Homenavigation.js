import { View, Text } from "react-native";
import React from "react";
import Slider from "../Components/Slider";
import EventsListScreen from "./EventsListScreen"; 
import { createStackNavigator } from '@react-navigation/stack';
import EventDetails from "../Components/EventsArtist/EventDetails";
import BookAppointment from "../Components/BookEvents/BookAppointment";


const Stack= createStackNavigator();

export default function Homenavigation(){
  return(
    <Stack.Navigator 
    screenOptions={{ // here we are setting the screen options
      headerShown: false,
    }}
    >
      <Stack.Screen // here we are defining the screens
      name="Home" component={Slider} />
      <Stack.Screen name="EventsList" component={EventsListScreen} />
      <Stack.Screen name="EventDetails" component={EventDetails} />
      <Stack.Screen name="BookAppointment" component={BookAppointment} />
    </Stack.Navigator>
  )
}