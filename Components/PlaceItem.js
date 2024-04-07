import { View, Text, Image} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import React from "react";


export default function PlaceItems({place}){

  return(
    <View style={{flexDirection:'row', 
     flex: 1, display:'flex',
      width: '100%',
      gap: 5,
      alignItems: 'center'
      
       }}>

<Image
  source={{
    uri:
      "https://maps.googleapis.com/maps/api/place/photo" +
      "?maxwidth=400" +
      "&photo_reference=" +
      (place?.photos && place.photos[0]?.photo_reference) +
      "&key=AIzaSyADF4FSaCUU8m3uxh_pBkAYnBPQ7XWoKn0",
  }}

      style={{width: 180, height: 110, borderRadius: 10, margin: 10, marginLeft: 18}}
      />

        <View 
        style={{width: '50%', flex:1, }}>
        <View style={{flexDirection: 'row', display: 'flex', alignItems: 'center', marginBottom:4 }}
        >
            <Ionicons name="location-sharp" size={18} color="tomato" />
        <Text style={{ fontWeight: 'bold', fontSize: 15,  marginRight: 18, fontFamily: 'TowntixFontBold', color: 'black',}}
      >{place.name}</Text>
        </View>
      

        <Text 
        style={{ color: 'grey', fontSize: 12, marginBottom:9, marginRight: 18, fontFamily: 'TowntixFont'}}
      >{place.vicinity}</Text>

        <View
         style={{flexDirection: 'row', display: 'flex', marginRight: 18}}>
        <Ionicons name="ios-star" size={15} color="gold" />
        <Text style={{ marginLeft: 5, fontFamily: 'TowntixFont'}}
        >{place.rating}</Text>
       </View>
       </View>
      
  
    </View>
  )
}
