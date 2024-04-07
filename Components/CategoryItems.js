import { View, Text, Image } from "react-native";
import React from 'react';

export default function CategoryItems({category}) {
    return (
        <View style={{padding: 15, alignItems: 'center',
         width: 120, height: 100, borderRadius: 33, margin: 11,
         backgroundColor: 'white', marginLeft: 5, shadowColor: 'grey',
         shadowOpacity: 0.26, shadowOffset: {width: 0, height: 2}, shadowRadius: 6, elevation: 3, textAlign: 'center', marginRight:25}}
        >
        <Image source={category.icon} 
        style={{width: 50, height: 50}}
         />

            <Text
            style={{fontSize: 12, marginTop: 7,  textAlign: 'center', fontFamily: 'TowntixFont-SemiBold', color: 'black'}}
            >{category.name} </Text>

        </View>
    )


}