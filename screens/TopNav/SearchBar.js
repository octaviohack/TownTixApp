import { View,Text, StyleSheet } from "react-native"; 
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";
import Slider from "../../Components/Slider";

export default function SearchBar({setSearchText}) {
    const[searchInput, setSearchInput] = React.useState(''); // here we are using the search bar to search for the products and save the value in the searchInput state
    return (
        <View style={styles.container}>
            <Ionicons name="search" size={21} color="grey" style={{marginRight:10}} />
            <TextInput style={{color: 'grey', fontFamily: 'TowntixFont', fontSize: 14,}}
             placeholder="Search all events..." 
            onChangeText={(value) => setSearchInput(value)}
            onSubmitEditing={() => setSearchText(searchInput)}
            
             />
            
        </View>
        
    )

} 
const styles = StyleSheet.create({
   container: {
       display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 8,
        marginLeft: 8,
        marginRight: 10,
        elevation: 2,
        marginTop: 1,
        fontFamily: 'TowntixFont',
        marginTop: 10,  

   },


})