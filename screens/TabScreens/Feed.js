import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';

const FeedScreen = ({ navigation }) => {
  

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60, // Adjust as needed
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  profileImage: {
    width: 40, // Adjust as needed
    height: 40, // Adjust as needed
    borderRadius: 20, // Half the width/height to make it round
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default FeedScreen;


