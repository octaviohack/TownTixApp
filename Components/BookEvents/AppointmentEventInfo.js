import { View,Text, Image, ScrollView } from "react-native";
import React from "react";
import PageHeaderEvent from "../Shared/PageHeaderEvent";
import { Ionicons } from "@expo/vector-icons";
import BookingSection from "./BookingSection";



export default function AppointmentEventInfo({events}){ 
  return(
    <ScrollView>
      <PageHeaderEvent title={'Your tickets'} />
      <View
        style={{
          display: "flex",
          flexDirection: 'column-reverse',
          alignItems: "center",
          justifyContent: "space-between",
          gap:2, 
          
        }}
      >
        <Image source={{uri: events.attributes.image.data.attributes.url}} style={{width: 100, borderRadius:20, height: 100, marginTop:15,}} />
      
      <View>
      <Text
          style={{
            fontFamily: "TowntixFontBold",
            fontSize: 24,
            color: "black",
          }}
        >"
          {events.attributes.Name}
        "</Text>
      </View>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,

            
          }}
        >
          <Ionicons name="location" size={18} color="tomato" />
          <Text
            style={{
              fontFamily: "TowntixFont",
              fontSize: 12,
              color: "grey",
              marginLeft: 5,
            }}
          >
            {events.attributes.Address}
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontFamily: "TowntixFontMedium",
            fontSize: 17,
            color: "tomato",
            marginTop: 9,
          }}
        >
          {events.attributes.date}
        </Text>
      </View>
      </View>
      <View
       style={{ // this is the line 
          height: 1,
          backgroundColor: "grey",
          marginVertical: 10,
        }}
      >
      </View>
      <BookingSection events={events} />

    </ScrollView>
  )
}