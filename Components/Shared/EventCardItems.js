import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';

export default function EventCardItems ({events}){
    return(
        <View
        style={{flex: 1, marginTop: 10,}}
        showsVerticalScrollIndicator={false}
        >
            <Image source={{uri:events.attributes.image.data.attributes.url}} 
            style={{width: 345, height: 200, borderRadius: 10,
                    marginTop: 10, marginBottom: 5, marginLeft: 15, marginRight: 15, 
             }}/>

             <View style={{ borderRadius: 10, marginLeft: 15, marginRight: 15,backgroundColor:'white'}}
             >
                <Text style={{fontFamily: 'TowntixFontBold', fontSize: 15, color: 'black',  marginLeft: 20, }}>"
                {events.attributes.Name}"</Text>

                <FlatList
                data={events.attributes.categories.data}
                renderItem={({item}) => (
                    <Text style={{fontFamily: 'TowntixFont', fontSize: 12, color: 'grey', marginLeft: 20  }}>
                    {item.attributes.Name}</Text>
                )}
                />
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 5, }}>
              
                  <Ionicons name="location" size={15} color="tomato" style={{marginLeft: 20, }} />
                  <Text style={{fontFamily: 'TowntixFont', fontSize: 12, color: 'grey', marginLeft: 5,}}
                  >{events.attributes.Address}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 5, marginBottom:10 }}>
              
                  <Ionicons name="eye" size={15} color="tomato" style={{marginLeft: 20, }} />
                  <Text style={{fontFamily: 'TowntixFont', fontSize: 12, color: 'grey', marginLeft: 5,}}
                  >{events.attributes.eye}</Text>
                </View>

                
                

             </View>

            
        </View>
    )
}