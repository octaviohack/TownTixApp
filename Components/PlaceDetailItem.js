import { View, Text, Image, Share } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";



export default function PlaceDetailItem({place, onDirectionClick}){
  return(
    <View>
    
      <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 10, marginBottom: 8, fontFamily: 'TowntixFontBold', color: 'black',}}
      >
        {place.name}
        <Ionicons style={{textAlign: 'center'}} name="ios-star" size={17} color="gold"  />
        <Text style={{ textAlign: 'center', marginBottom: 5}}
        >{place.rating}</Text>
      </Text>
    
      
       {place.opening_hours?.open_now ? <Text style={{color: 'green', textAlign: 'center', marginTop: 10}}>Open Now</Text> : <Text style={{color: 'red', textAlign: 'center', marginTop: 10}}>Closed Now</Text>}
        <Image
  source={{
    uri:
      "https://maps.googleapis.com/maps/api/place/photo" +
      "?maxwidth=400" +
      "&photo_reference=" +
      (place?.photos && place.photos[0]?.photo_reference) +
      "&key=AIzaSyADF4FSaCUU8m3uxh_pBkAYnBPQ7XWoKn0",
  }}

      style={{width: 350, height: 170, borderRadius: 10,  alignItems: 'center', marginTop: 20, }}
      />
      <Text 
        style={{ color: 'grey', fontSize: 14, marginTop: 10, textAlign: 'center' }}
      >{place.vicinity}</Text>

      <View style={{flexDirection: 'row', display: 'flex',  alignItems: 'center', justifyContent: 'center'}}>
      

      <TouchableOpacity onPress={()=>onDirectionClick()}  
      style={{flexDirection: 'row', display: 'flex', alignItems: 'center', marginTop: 10, }}> 
      <Ionicons name = "navigate-circle-outline" size={20} color="tomato" style={{ alignItems:'center'}}/>
      <Text style={{marginLeft:3}}>Directions</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Share.share({ message: 'Check out this place: ' + place.name + ' \n ' +"  Address"+ place.vicinity,
       })}
      style={{flexDirection: 'row', display: 'flex', alignItems: 'center', marginTop: 10,  }}> 
      <Ionicons name = "share-social-outline" size={20} color="tomato" style={{marginLeft: 40, alignItems:'center'}}/>
      <Text style={{marginLeft:3 }}>Share</Text>
      </TouchableOpacity>
      </View>


    
    </View>
  )
}