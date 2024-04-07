import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ActionButtonList from "./ActionButtonList";
import BookingSection from "../BookEvents/BookingSection";

export default function EventsInfo({ events }) {
  if (!events || !events.attributes) {
    return null;
  }

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  

  return (
    <View>
      <FlatList
        data={events.attributes.categories.data}
        renderItem={({ item }) => (
          <Text
            style={{
              fontFamily: "TowntixFont",
              fontSize: 12,
              color: "grey",
            }}
          >
            {item.attributes.Name}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={{ alignItems: "center", marginBottom: 1 }}>
        <Text
          style={{
            fontFamily: "TowntixFontBold",
            fontSize: 24,
            color: "black",
          }}
        >"
          {events.attributes.Name}
        "</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "TowntixFontMedium",
            fontSize: 17,
            color: "tomato",
          }}
        >
          {events.attributes.date}
        </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Ionicons name="location" size={18} color="tomato" />
          <Text
            style={{
              fontFamily: "TowntixFont",
              fontSize: 12,
              color: "grey",
              marginLeft: 5,
            }}
          >
            {events.attributes.Address}
          </Text>
        </View>
      </View>

      <Text style={{ fontFamily: "TowntixFont", fontSize: 12, color: "grey", marginTop:10 }}>
      
        Description:{" "}
        {showFullDescription
          ? events.attributes.Description
          : `${events.attributes.Description.slice(0, 100)}...`}
        {!showFullDescription && (
          <Text
            style={{ color: "tomato", fontFamily: "TowntixFont"}}
            onPress={toggleDescription}
          >
            {" "}
            Read More
          </Text>
        )}
      </Text>

      <View
        style={{
          height: 1,
          backgroundColor: "grey",
          marginVertical: 10,
        }}
      />
      <ActionButtonList events={events} />
      
      
    </View>
  );
}
