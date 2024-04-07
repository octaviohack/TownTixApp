import { View, Text, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import PageHeaderEvent from "../Shared/PageHeaderEvent";
import EventsInfo from "./EventsInfo";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


export default function EventDetails(){
  const navigation = useNavigation();
  const [events, setEvents] = React.useState([]);
  const params = useRoute().params; // here we are using the useRoute hook to get the params from the previous screen

  React.useEffect(() => { 
    if(params && params.events) {
      setEvents(params.events); // here we are setting the events state with the param event
    }
  }, [])

  return (
    <View style={{flex: 1, backgroundColor: 'white',}}
    >
    <ScrollView>
      <View style={{position: 'absolute', zIndex: 1,margin:15, }}
      >
        <PageHeaderEvent title={''} />
      </View>
      
      <View>
        {events && events.attributes && events.attributes.image && 
          <Image 
            source={{uri: events.attributes.image.data.attributes.url}} 
            style={{
              width: '100%', 
              height: 270, 
              
            }}
          />
        }
      </View>
      <View style={{marginTop:-20, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20,}}
      >
        <EventsInfo events={events} />
      </View>
      </ScrollView>
      
      



      <TouchableOpacity 
      onPress={() => navigation.navigate('BookAppointment',
       {
         events: events
       })}
      style={{padding: 13, borderRadius: 99, backgroundColor: 'tomato',left:1, right:1, marginBottom:15, zIndex:20, marginLeft:10,marginRight:10,}}
      >
        <Text style={{fontFamily: 'TowntixFontBold', fontSize: 20, color: 'white', textAlign: 'center',}}
        >Buy Ticket and Get Booking</Text>

      </TouchableOpacity>
    </View>
  )
}
