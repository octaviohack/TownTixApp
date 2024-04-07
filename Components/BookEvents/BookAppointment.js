import { View,Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import AppointmentEventInfo from "./AppointmentEventInfo";


export default function BookAppointment(){
  const params = useRoute().params;
  return(
    <View style={{padding: 20,}}
    >
      <AppointmentEventInfo events={params.events} />
    </View>
  )
}