import { View,Text, FlatList } from "react-native";
import React from "react";
import GlobalApiFetch from "../Services/GlobalApiFetch";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';




export default function Categories() {

  const [categoriesList, setCategories] = React.useState([]) // here we are setting the categoriesList state
  const navigation = useNavigation(); // here we are using the useNavigation hook to navigate to the EventsListScreen

  React.useEffect(() => { 
    getCategories();
  }, [])

  const getCategories = async () => { // here we are fetching the categories data from the api
    GlobalApiFetch.getCategories().then(response => {
      console.log('Categories-->',response.data.data);
      setCategories(response.data.data);
    })
  }
  if (!categoriesList){
    return null;
  }
  


    return (
        <View
         style = {{marginTop: 10}}
         >
            <FlatList
            data={categoriesList}
            
            showsHorizontalScrollIndicator={false}
            
            horizontal={true}
            renderItem={({item}) => (
              <TouchableOpacity 
              onPress={() => navigation.navigate('EventsList', 
              { 
                
                categoryName: item.attributes.Name,
              },
              )} // here we are navigating to the EventsListScreen
              >
              <View>
                <Text style={{marginTop: 5, marginLeft: 10, marginRight: 3, marginBottom: 10, shadowColor: 'black', shadowOpacity: 0.5, shadowRadius: 5, elevation: 5,  borderRadius: 10, padding: 7, shadowOffset: {width: 0, height: 0}, borderWidth: 1, borderColor: 'tomato', fontFamily: 'TowntixFontMedium', fontSize: 13.6, color: 'tomato', }}
                >{item.attributes.Name}</Text>
              </View>

              
              </TouchableOpacity>
            )}

            />
        </View>
    )
}