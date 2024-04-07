import { View,Text, TouchableOpacity } from "react-native";
import React from 'react';
import { FlatList } from "react-native-gesture-handler";
import CategoryItems from "./CategoryItems";
import { Ionicons } from '@expo/vector-icons';

export default function CategoryList({setSelectedCategory}) {
     const categoryList = [
      {
        id:1,
        name: 'Restaurants',
        value: 'meal_takeaway',
        icon: require('../assets/fast-food.png'),// cambiar los iconos por los de la app
      },
      {
        id:2,
        name: 'Events',
        value: 'night_club',
        icon: require('../assets/stage.png'),

      },
      





     ]
    return (
        <View>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginTop:9}}
            >
            <Ionicons name="navigate-sharp" size={20} color="tomato" />
               <Text style={{fontSize: 18, fontWeight: 'bold', fontFamily: 'TowntixFontBold', color: 'black',marginLeft:4}}
            >Food & Events </Text>
            </View>
           

            <FlatList
              style={{marginLeft:60}}
              horizontal = {true} // to make it horizontal
              showsHorizontalScrollIndicator={false} // to hide scroll bar or not
              data={categoryList}
              renderItem={({item}) => (
                <TouchableOpacity 
                onPress={()=>setSelectedCategory(item.value)} >
                  <CategoryItems category={item}/>
                </TouchableOpacity>
              )}
            />
        </View>
    )
}