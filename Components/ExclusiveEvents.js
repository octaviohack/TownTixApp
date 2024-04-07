import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import GlobalApiFetch from "../Services/GlobalApiFetch";
import { FlatList } from "react-native-gesture-handler";
import EventItem from "./EventItem";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function ExclusiveEvents(){
  const navigation = useNavigation();
  const [eventsList, setEventsList] = React.useState([]);

  React.useEffect(() => { // here we are calling the getEvents function
    getEvents()
  },[])

  const getEvents = () => { // here we are fetching the events data from the api
    GlobalApiFetch.getEvents().then(response => {
      console.log('Events-->',response.data.data);
    
      setEventsList(response.data.data);  
      
    })

  }


   return eventsList&&(
  <View style={{marginTop: 10, marginLeft: 10, }}
  >
  <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10, }}
  >
    <Ionicons name="musical-notes" size={22} color="tomato" style={{marginLeft:1}} />
    <Text style={{fontFamily: 'TowntixFontBold', fontSize: 17, color: 'black',marginLeft:3 }}>
      SPOTLIGHT</Text> 
  </View>
    

    

      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{marginTop: 10,  marginRight:10, }}
      data={eventsList}
      renderItem={({item,index}) => (
        <TouchableOpacity onPress={() => navigation.navigate('EventDetails', {events:item})}
        >
          <EventItem events={item}  />
        </TouchableOpacity>
      )}
      />


   <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10, }}
     >
    <Ionicons name="ellipsis-vertical" size={22} color="tomato" style={{marginLeft:1}} />
    <Text style={{fontFamily: 'TowntixFontBold', fontSize: 17, color: 'black',marginLeft:3 }}>
      All Events</Text> 
    </View>



      
     
  </View>
  )

}