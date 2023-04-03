import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Story = ({isMyStory, text="Your Story"}) => {
  return (
    <TouchableOpacity style={{marginRight:10, marginLeft:isMyStory ? 10 : 0, flexDirection:'column', alignItems:"center"}}>
      <Image
        style={{ width: 60, height: 60, borderRadius: 60, resizeMode: "cover", borderColor:isMyStory ? "grey" : "#DD2A7B", borderWidth:2 }}
        source={{ uri: "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" }}
      />
      <Text
        style={{
        color:isMyStory ? "grey" : "#fff",
          fontFamily: "regular",
          fontSize: 11,
          marginTop: 5,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Story;

const styles = StyleSheet.create({});
