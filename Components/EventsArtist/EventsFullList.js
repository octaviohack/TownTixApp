import { Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import EventCardItems from "../Shared/EventCardItems";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


export default function EventsFullList({eventsList}){
  const navigation = useNavigation();
  return(
    <View>
      <FlatList
      data={eventsList}
      renderItem={({item}) => (
       
        <TouchableOpacity onPress={() => navigation.navigate('EventDetails',
         {
            events: item
         })}>
        <EventCardItems events={item} />
        </TouchableOpacity>
      
      )}
      />
    </View>
  )
}