
import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import PageHeaderEvent from '../../Components/Shared/PageHeaderEvent';
import GlobalApiFetch from '../../Services/GlobalApiFetch';
import BookCardItem from '../../Components/BookEvents/BookCardItem';

export default function Notifications() {

  const [userBooks, setUserBooks] = React.useState([]);


    React.useEffect(() => {
        getUserBooks();
    }, []);

   const getUserBooks = async () => {
        GlobalApiFetch.getUserBooks().then(response => {
          setUserBooks(response.data.data);
            console.log('UserBooks-->', response.data.data);
        })
   }

    return (
        <View >
            <PageHeaderEvent 
             title={'New Books Events'} />
            <FlatList
              data={userBooks}
              renderItem={({ item }) => (
                <BookCardItem book={item} />
              )}
            />
        </View>
    );
}