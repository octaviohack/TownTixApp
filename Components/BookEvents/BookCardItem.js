import { View, Text, Image} from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';

export default function BookCardItem({book}){
  return(
    <View style={{padding: 10,
    borderWidth:1,
    borderColor:'tomato',
    borderRadius:10,
    margin:10,
    backgroundColor:'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    
    
   
    
    }}
    >
    <View>
      <Text style={{fontFamily:'TowntixFontBold', fontSize: 12, color: 'grey', }}
      > 
      You have booked for: 
         {}
      </Text>
      <Text style={{fontFamily:'TowntixFontBold', fontSize: 15, color: 'tomato', }}
      >"
        {book.attributes.eventName}"
      </Text>
      
     </View>
      <Text style={{fontFamily: 'TowntixFont', fontSize: 13, color: 'black', }}
      >{moment(book.attributes.Date).format('MMMM Do YYYY')} - {book.attributes.Time}</Text>
       <View>
      <Text style={{fontFamily:'TowntixFontBold', fontSize: 12, color: 'grey', }}
      > 
         {book.attributes.Username}
      </Text>
     </View>
     
    

     
     
     

    

    </View>
  )
}