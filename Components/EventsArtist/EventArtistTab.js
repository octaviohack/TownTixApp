import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Calendar } from "react-native-calendars";



export default function EventArtistTab({activeTab}){
  const [activeIndex, setActiveIndex] = React.useState(0);
  return(
    <View 
    style = {{ marginTop: 10, }}
    >
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems:'center'}}>
      
      <TouchableOpacity 
      style={[
        activeIndex === 0 ? styles.activeTab : styles.inactiveTab
      ]}
      onPress={() => {setActiveIndex(0); activeTab('Events') }}
      >
        <Text style={[
          activeIndex === 0 ? styles.activeText : styles.inactiveText
         ]}>
          Events</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={[
        activeIndex === 1 ? styles.activeTab : styles.inactiveTab
      ]}
      onPress={() => {setActiveIndex(1); activeTab('Artists')}}
      >  
        <Text style={[
          activeIndex === 1 ? styles.activeText : styles.inactiveText
         ]}>
          Artists</Text>
      </TouchableOpacity>

      

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  activeText:{
    fontFamily: 'TowntixFontBold', fontSize: 16, color: 'tomato',textAlign: 'center'
  },
  inactiveText:{
    fontFamily: 'TowntixFont', fontSize: 16, color: 'grey', textAlign: 'center'
  }, 
  activeTab:{
    borderBottomColor: 'tomato', borderBottomWidth: 2, padding:3, 
  }, 
  inactiveTab:{
    borderBottomColor: 'grey', borderBottomWidth: 1, padding:3 
  }
})