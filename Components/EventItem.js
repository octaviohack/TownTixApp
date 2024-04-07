import { Text, View, Image} from "react-native";
import React from "react";


export default function EventItem({events}) { // here we are passing the events as a prop
  
    return (
        <View style={{ alignItems: 'center',  justifyContent: 'space-between', display: 'flex', marginLeft: 50, }}
        >
             
            <Image style={{width:230, height: 320, borderRadius:10,  }}
            source={{uri:events.attributes.image.data.attributes.url}}/>
          

            <Text style={{fontFamily: 'TowntixFontBold', fontSize: 20, color: 'black', marginTop: 10, }}>"
            {events.attributes.Name}"</Text>

            <Text style={{fontFamily: 'TowntixFontMedium', fontSize: 13, color: 'tomato', }}>
            {events.attributes.date}</Text>

            <Text style={{fontFamily: 'TowntixFont', fontSize: 13, color: 'grey', marginBottom:10, marginRight:7 }}>
            {events.attributes.Address}</Text>
            
        </View>
    )


}