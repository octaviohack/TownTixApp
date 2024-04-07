import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import{ createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SettingsScreen from './screens/TabScreens/Settings';
import NotificationsScreen from './screens/TabScreens/Notifications';
import { Image } from 'react-native';
import Feed from './screens/TabScreens/Feed';
import { Ionicons } from '@expo/vector-icons';
import MapScreen from './screens/TabScreens/Map';
import CalendarScreen from './screens/TabScreens/Calendar';
import FavoritesScreen from './screens/DrawerScreens/Favorites';
import { Pressable, useColorScheme } from 'react-native';
import Chat from './screens/Chat';
import PlaceNavigation from './screens/PlaceNavigation';
import UserProfileScreen from './screens/DrawerScreens/Profile';
import SearchBar from './screens/TopNav/SearchBar';
import Slider from './Components/Slider';
import Homenavigation from './screens/Homenavigation';
import Toast from 'react-native-toast-message';






//top tab navigator material navigation////// por el momento no se esta usando esta navegacion 
const TopTab = createMaterialTopTabNavigator();
function TopTabGroup({user}) {
  return (
    <TopTab.Navigator
    screenOptions={{
      tabBarLabelStyle: { 
        textTransform: 'capitalize',
        fontWeight: 'bold',
        borderRadius: 10,
        color: 'black',
        
        
      },
      tabBarIndicatorStyle: {
        backgroundColor: 'tomato',
      },  
      tabBarStyle: {
        backgroundColor: 'Black',
        borderRadius: 10,
      },
    }}
    >
      
      <TopTab.Screen name="Popular" component={Slider} />
      <TopTab.Screen name="Favorites" component={UserProfileScreen} />
      
    </TopTab.Navigator>
  );
}






// drawer navigator
const Drawer = createDrawerNavigator();
 function DrawerGroup({user}) {
  return (
    
    <Drawer.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'tomato',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
    
    }} >
     <Drawer.Screen name="Home" component={TabGroup} options={{headerShown: false}} />
     <Drawer.Screen name="Favorites" component={FavoritesScreen} />
     <Drawer.Screen name="My Bookings" component={NotificationsScreen} />
     <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
 }




const Stack = createStackNavigator(); // stack navigator these screen can go back and forth 
function StackGroup() {
  return (
    <Stack.Navigator> 
      <Stack.Screen name="FeedMain" component={Feed} options={{headerShown: false}} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} 
        options={{presentation: 'modal', headerShown: false}}
      />

    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator(); // tab navigator

function TabGroup({navigation}) { // Add this function and screens 
  return (
    <Tab.Navigator 
      tabBarOptions={{

        activeTintColor: 'tomato',
        inactiveTintColor: 'grey',
        
        
      }}
      screenOptions={({ route }) => ({
        
        tabBarShowLabel: true, // this is to show the label of the tab cambiarlo para que se vea mejor el info del events


        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
  
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Map') {
            iconName = focused ? 'ios-map' : 'ios-map-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
          } else if (route.name === 'My Events') {
            iconName = focused ? 'happy' : 'happy-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubble' : 'chatbubble-ellipses-outline';  
          }
  
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })} > 
      <Tab.Screen 
      
       name="Home" component={Homenavigation} 
        options={{headerLeft: () => (
          <Pressable onPress={() => navigation.openDrawer()}>
             <Image 
            source={{uri: 'https://i.pinimg.com/originals/90/4b/86/904b861054bde3670f182e7941e0939f.png'}}
            style={{width: 50, height: 50, borderRadius: 20, marginLeft: 15, marginBottom: 8}}
          />
          </Pressable>
          
        )}}
      />
      <Tab.Screen options={{headerShown: false}}
      name="Map" component={PlaceNavigation}/>
      <Tab.Screen 
      name="My Events" component={CalendarScreen} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>  
  );
}

export default function Navigation() {
  
  const currentTheme = useColorScheme();
  return (
    <NavigationContainer theme={currentTheme === "dark" ? DarkTheme : DefaultTheme}>
     
    <DrawerGroup/> 
    <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}