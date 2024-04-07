import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function PageHeaderEvent({title}){
  const navigation = useNavigation(); // here we are using the useNavigation hook to get the navigation object here we are using the goBack method to go back to the previous screen
    return(
        <View
         style={{display: 'flex', flexDirection: 'row', alignItems: 'center', }}
        >
        
        <TouchableOpacity onPress={() => navigation.goBack()}>
        
        <Ionicons name="arrow-back-circle-outline" size={30} color="tomato" />
        </TouchableOpacity>
            <Text
            style={{fontFamily: 'TowntixFontBold', fontSize: 20, color: 'black', alignContent: 'center', marginLeft: 10,}}
            >{title}</Text>
        </View>
    )
}
