import { View, Text, Touchable, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import React from 'react';
import PlaceItems from "./PlaceItem";
import { useNavigation } from "@react-navigation/native";


export default function PlaceList({placeList}) {  

  const navigator = useNavigation();
  const onPlaceClick = (item) => {
    navigator.navigate('place-detail', {place: item});
  }

  return(
    <View 
    >
      <Text style={{ textAlign: 'left', marginTop: 10, fontSize: 18, fontWeight: 'bold', marginLeft: 18, fontFamily: 'TowntixFontBold', color: 'black',}}
       >Around You:</Text>

      <FlatList
        data={placeList}
        renderItem={({item}) => (
          <TouchableOpacity onPress={()=>onPlaceClick(item)}>
          {<PlaceItems place={item}/>}
          </TouchableOpacity>
        )}
      />

    </View>
  )
}