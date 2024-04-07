import { View, Text, Touchable, Platform } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import PlaceDetailItem from "./PlaceDetailItem";
import MapView, {Marker, PROVIDER_GOOGLE}from 'react-native-maps';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Linking } from "react-native";




export default function PlaceDetail(){
  const param=useRoute().params; // here we are using the useRoute to get the params from the PlaceNavigation.js
  const [place, setPlace] = React.useState([]);
  // here we are using the useState to get the params from the PlaceNavigation.js

  useEffect(() => {
  setPlace(param.place);
  },[]); // here we are using the useEffect to get the params from the PlaceNavigation.js

  const [origin, setOrigin] = React.useState({
    PlaceDetailItem: param.place,
    latitude: param.place.geometry.location.lat,
    longitude: param.place.geometry.location.lng,
  
  });

  const onDirectionClick = () => {
    const url =Platform.select({
      ios: 'maps:'+place.geometry.location.lat+','+place.geometry.location.lng+'?q='+place.vicinity,
      android: 'geo:'+place.geometry.location.lat+','+place.geometry.location.lng+'?q='+place.vicinity,
      
    });
    Linking.openURL(url);
    }

  return(
    <View style={{padding: 20, backgroundColor: 'white', flex: 1,}}
    >
      <PlaceDetailItem place={place} onDirectionClick={()=>onDirectionClick()}/>
      <MapView placeList={PlaceDetailItem.name}
      style={{flex: 1, marginTop: 20, borderRadius: 10, overflow: 'hidden', borderWidth: 1, borderColor: '#ccc',width: '100%', 
      }}
      initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      
    
    >
      <Marker 
      coordinate={{
        latitude: origin.latitude,
        longitude: origin.longitude,
      }}
     
      title={place.name}
      description={place.vicinity}
      />
    </MapView>

    <TouchableOpacity style={{backgroundColor: 'tomato', padding: 10, borderRadius: 10, marginTop: 15, width: '100%', marginBottom:10}}
    onPress={()=>onDirectionClick()}
    > 
    <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontFamily:'TowntixFontBold'}}>Get Directions on Google Map</Text>
    </TouchableOpacity>


    

     
    </View>
  )
}
