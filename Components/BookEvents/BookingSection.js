import { View,Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import moment from "moment";
import GlobalApiFetch from "../../Services/GlobalApiFetch";
import { Calendar } from "react-native-calendars";
import Toast from "react-native-toast-message";



export default function BookingSection({events}){

  const [selectedDate, setSelectedDate] = useState([]);// state to store the next 7 days
  const [selectedTimeList, setSelectedTimeList] = useState();// state to store the next 7 days
  const [selectedDay, setSelectedDay] = useState();// state to store the next 7 days
  
  const [selectedTime, setSelectedTime] = useState();// state to store the next 7 days
  
  

  useEffect(() => {
    getDays();
    getTimes();
  }, [])

  const getTimes = () => {
    const timesList=[];
    for (let i =8; i <=12; i++) {
      timesList.push({
        time:i + ':00 PM'
      })
    }
    setSelectedTimeList(timesList);
  }

  const getDays = () => {
    const today=moment(); // current date
    const netxWeek=[]; // empty array to store the next 7 days
    for (let i = 1; i < 7; i++) // we can set the day o nextday
     { // loop to get the next 7 days
      const date=moment().add(i, 'days'); 

      netxWeek.push({
        date:date,// store the date
        day:date.format('ddd'),// format the date to be like Mon
        formmatedDate:date.format('Do MMM') // format the date to be like 1st Jan
      })

    }
    console.log('Next 7 days-->',netxWeek);
    setSelectedDate(netxWeek);
  }

 

  const BookingSectionH = () => { // we will use this function to book the event, we will send the selected day and time to the server
    
    const data={
       data:{
          
          Username:'Octavio',
          Date:selectedDay,
          Time:selectedTime,
          events:events.id,
          
          eventName:events.attributes.Name,
          

          
        
       }
      
    }
      GlobalApiFetch.creatBooking(data).then((response) => {
      console.log(response)
      Toast.show({
        type: 'success',
        position: 'top',
        text1: events.attributes.Name + ' has been booked',
        text2: 'You have successfully booked for the event',
        visibilityTime: 4000,
      });// show the toast message
      });

  }

  return(
    <View>
      <Text
      style={{
      fontFamily: "TowntixFont",
      fontSize: 13,
      color: "grey",
    }}
      >Options for the Events</Text>
      
        <Text
          style={{
            fontFamily: "TowntixFontBold",
            fontSize: 16,
            color: "black",
            marginTop: 5,
          }}
        >
          Book Now
          
        </Text>
       
      <FlatList
        data={selectedDate}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 10,  marginRight:10, }}
        renderItem={({item,index}) => (
          <TouchableOpacity onPress={() => setSelectedDay(item.date)}
          style={
            [styles.dayButton,
             selectedDay === item.date ? {borderColor: 'tomato'} : null // if the day is selected change the border color to tomato
            ]
            }>

            <Text style={[{fontFamily: 'TowntixFont', fontSize: 13, color: 'grey', marginBottom:5, marginRight:7 },
            selectedDay === item.date ? {color:'black'} : null]
            }>
              {item.day}</Text>
            <Text style={{fontFamily: 'TowntixFontBold', fontSize: 13, color: 'tomato',  }}>
              {item.formmatedDate}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
       <Text
          style={{
            fontFamily: "TowntixFontBold",
            fontSize: 16,
            color: "black",
            marginTop: 5,
          }}
        >
          Time
          
        </Text>

<FlatList
        data={selectedTimeList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 10,  marginRight:10, }}
        renderItem={({item,index}) => (
          <TouchableOpacity onPress={() => setSelectedTime(item.time)}
          style={
            [styles.dayTime,{paddingVertical:10, },
             selectedTime === item.time ? {borderColor: 'tomato'} : null // if the day is selected change the border color to tomato
            ]
            }>

            <Text style={[{fontFamily: 'TowntixFont', fontSize: 13, color: 'grey', marginBottom:5, marginRight:7 },
            selectedTime === item.time ? {color:'black'} : null]
            }>
              {item.time}</Text>
            
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <View>
      <Calendar style={{marginTop: 10,  marginRight:10, borderBlockColor: 'tomato', borderColor: 'tomato', borderWidth: 1, borderRadius: 10, fontFamily : 'TowntixFontBold'}}
        current={moment().format('YYYY-MM-DD')}
        minDate={moment().format('YYYY-MM-DD')}
        maxDate={moment().add(6, 'days').format('YYYY-MM-DD')}
        onDayPress={
          (day) => {
            setSelectedDay(day.dateString);
            
          }
        }
        markedDates={{
          [selectedDay]: { selected: true, selectedColor: 'tomato' },

        }}
      />


      </View>
      
     <TouchableOpacity 
      onPress={() => BookingSectionH()}
      style={{padding: 13, borderRadius: 99, backgroundColor: 'tomato',left:1, right:1, marginBottom:15, zIndex:20, marginLeft:10,marginRight:10, marginTop:7}}
      >
        <Text style={{fontFamily: 'TowntixFontBold', fontSize: 20, color: 'white', textAlign: 'center',}}
        >Make Booking</Text>



      </TouchableOpacity>

      <Toast 
        ref={(ref) => Toast.setRef(ref)} />


    </View>
  )
}
const styles = StyleSheet.create({
  dayButton:{
    alignItems: 'center', justifyContent: 'space-between', display: 'flex', marginLeft: 10, borderWidth:1, 
          borderRadius:99, padding:4, paddingHorizontal:20, borderColor:'grey', marginRight:10
  }, 
  dayTime:{
    alignItems: 'center', justifyContent: 'space-between', display: 'flex', marginLeft: 10, borderWidth:1, 
          borderRadius:99, padding:4, paddingHorizontal:20, borderColor:'grey', marginRight:5
  }

})