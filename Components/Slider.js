import { View,Text, Image,TextInput, StyleSheet, Dimensions  } from "react-native";
import React,{useEffect} from "react";
import GlobalApiFetch from "../Services/GlobalApiFetch";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import SearchBar from "../screens/TopNav/SearchBar";
import Categories from "./Categories";
import ExclusiveEvents from "./ExclusiveEvents";



export default function  Slider() {
  const [slider, setSlider] = React.useState([])

  useEffect(() => { // here we are calling the getSlider function
    getSlider();
  }, [])

  const getSlider = async () => { // here we are fetching the slider data from the api
    const result = (await GlobalApiFetch.getSlider()).data;
    
    const response = result.data.map((item) => ({
      id: item.id,
      name: item.attributes.name,
      image: item.attributes.image.data.attributes.url,
    }));
    console.log('SlideList-->',response); // here we are logging the response
    setSlider(response);

  }

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        >

        <SearchBar setSearchText ={(value) => console.log(value)}/>
          
        <Categories/>
           <FlatList // here we are rendering the slider data
            data = {slider}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View>
                <Image source={{uri: item.image}} 
                style={{width: 380, height: 114, borderRadius:10, marginTop:10, marginLeft:6.7, marginBottom:5}}/>
              </View>
            )}
           />
            <ExclusiveEvents/>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
  container: {
      display: 'flex',
       flexDirection: 'row',
       backgroundColor: 'white',
       borderRadius: 10,
       padding: 10,
       elevation: 2,
       marginTop: 10,

  },


})