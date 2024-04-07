
import { StyleSheet, View, Dimensions } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView, {Marker, PROVIDER_GOOGLE}from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_API_KEY} from "@env";
import CategoryList from '../../Components/CategoryList';
import GlobalApi from '../../Services/GlobalApi';
import PlaceList from '../../Components/PlaceList';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import PlaceMarker from '../../Components/PlaceMarker';
import { Ionicons } from '@expo/vector-icons';






const MapScreen = () => {

  const [placeList, setPlaceList] = useState([]);


  
  

  useEffect(() => {
    GetNearBySearchPlace('restaurant');
  }, []);
  

  const GetNearBySearchPlace = (value) => {
    GlobalApi.nearbyPlace(origin.latitude,origin.longitude,value)
      .then(resp => { // resp.data.results and api results from google90
        
        setPlaceList(resp.data.results);
      })
      
  };

  
  

  const [origin, setOrigin] = React.useState({
    latitude: 53.347837,    
    longitude: -6.259436,  
  });
  

// Function to handle place selection
const onPlaceSelected = (details) => {
  const newOrigin = {
    latitude: details.geometry.location.lat,
    longitude: details.geometry.location.lng,
   
  };
  setOrigin(newOrigin);
};


return (
  
  <ScrollView style={styles.container}>
  <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor:'white', padding: 2, borderRadius: 10, margin: 3, fontFamily: 'TowntixFont', fontSize: 12, color: 'grey',}}
  >
   <Ionicons name="search" size={21} color="grey" />
   <GooglePlacesAutocomplete 
   
  placeholder='Search for places'
  fetchDetails={true}
  onPress={(data, details) => onPlaceSelected(details)} 
  query={{
    key: GOOGLE_API_KEY,
    language: 'en',
  }}
  styles={{
    container: { width: '100%', zIndex: 1, },
    listView: { backgroundColor: 'white', },
    backgroundColor: 'white',
    
    
    
  }}
  
  />
  </View>
 

    <MapView placeList={placeList}
      style={styles.map}
      initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04,
      }}
     
    >

      <Marker
        draggable
        coordinate={origin}
        title='You Destination'
        onDragEnd={(e) => setOrigin(e.nativeEvent.coordinate)}
      />
      {placeList.map((item,index)=>index<=5&&(
        <PlaceMarker item={item} />

      ))}
      <MapViewDirections
        origin={origin}
        destination={{
          latitude: 53.349805, // Example destination latitude
          longitude: -6.260310, // Example destination longitude
        }}
        apikey={GOOGLE_API_KEY}
        strokeColor='blue'
        strokeWidth={2}
      />
    </MapView>
    <CategoryList setSelectedCategory={(value)=>GetNearBySearchPlace(value)}/>
    {placeList? <PlaceList placeList={placeList} />: null}
  </ScrollView>
);
};

const styles = StyleSheet.create({

map: {
 
  width:Dimensions.get('screen').width, 
  height:Dimensions.get('screen').height*0.30,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  borderRadius: 10,
  fontFamily: 'TowntixFont', fontSize: 12, color: 'grey',

  
},    
});


export default MapScreen;
