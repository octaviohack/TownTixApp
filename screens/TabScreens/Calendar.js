import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import EventArtistTab from "../../Components/EventsArtist/EventArtistTab";
import { useState } from "react";
import GlobalApiFetch from "../../Services/GlobalApiFetch";
import EventsFullList from "../../Components/EventsArtist/EventsFullList";



export default function CalendarScreen() {

  const [eventsList,setEventsList] = useState([]); // here we are using the useState hook to set the eventsList state

  const [activeTab, setActiveTab] = useState('Events'); // here we are using the useState hook to set the activeTab state
  
  React.useEffect(() => { // here we are calling the getEventsByCategory function


    getAllEvents();
  
  },[])
  
  const getAllEvents = () => {
    GlobalApiFetch.getAllEvents().then(response => {
      console.log('EventsFull-->',response.data.data);
      setEventsList(response.data.data); // here we are setting the eventsList state with the response data
    })
  
  }

  return (
    <View>
    <EventArtistTab activeTab={(value)=>{setActiveTab(value)}} // here we are passing the activeTab as a prop to the EventArtistTab component
/> 
         {!eventsList?.length?
          <ActivityIndicator size="large" color="black" style = {{marginTop: '60%'}}/>
          :
          activeTab==='Events'?
          <EventsFullList eventsList={eventsList}/> // here we are passing the eventsList as a prop to the EventsFullList component
          :<Text>Artists</Text>
          }

    </View>
  );
}