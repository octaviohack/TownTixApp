import { View, Text, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import PageHeaderEvent from "../Components/Shared/PageHeaderEvent";
import EventArtistTab from "../Components/EventsArtist/EventArtistTab";
import EventsFullList from "../Components/EventsArtist/EventsFullList";
import GlobalApiFetch from "../Services/GlobalApiFetch";


export default function EventsListScreen(){


const [eventsList,setEventsList] = useState([]); // here we are using the useState hook to set the eventsList state
const params = useRoute().params; // here we are using the useRoute hook to get the params from the previous screen
const [activeTab, setActiveTab] = useState('Events'); // here we are using the useState hook to set the activeTab state

React.useEffect(() => { // here we are calling the getEventsByCategory function


  getEventsByCategory();

},[])

const getEventsByCategory = () => {
  GlobalApiFetch.getEventsByCategory(params?.categoryName).then(response => {
    console.log('EventsCategory-->',response.data.data);
    setEventsList(response.data.data); // here we are setting the eventsList state with the response data
  })

}

  return( // here we are displaying the categoryName
    <View
    style={{padding: 10,}}
    >
      
      <PageHeaderEvent title={params?.categoryName}
        // here we are passing the categoryName as a prop to the PageHeaderEvent component
      /> 
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
  )
}