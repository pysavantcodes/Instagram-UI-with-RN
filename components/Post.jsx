import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Entipo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";

const Post = ({name, image, profile}) => {
  return (
    <View style={{ marginTop: 15 }}>
      <View style={styles.head}>
        <View
          style={{ flexDirection: "row", alignItems: "center", columnGap: 12 }}
        >
          <Image
            style={{ width: 32, height: 32, borderRadius: 35 }}
            source={{
              uri: profile,
            }}
          />
          <Text style={{ fontFamily: "medium", color: "white", fontSize: 13 }}>
            {name}
          </Text>
        </View>
        <Entipo color={"white"} name="dots-three-vertical" size={17} />
      </View>
      <Image
        style={{ width: "100%", height: 220, resizeMode: "cover" }}
        source={{
          uri: image,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 13,
          paddingVertical: 15,
          paddingBottom:8
        }}
      >
        <View style={{ flexDirection: "row", columnGap: 15 }}>
          <Feather name="heart" color={"white"} size={25} />
          <Feather name="message-circle" color={"white"} size={25} />
          <Feather name="send" color={"white"} size={25} />
        </View>
        <Feather name="tag" color={"white"} size={25} />
      </View>
      <View style={{flexDirection:"row", columnGap:5, paddingHorizontal:10}}>
        <Text style={{ fontFamily: "regular", color: "white", fontSize:12 }}>Liked by</Text>
        <Text style={{ fontFamily: "medium", color: "white", fontSize:12 }}>jamesnot</Text>
        <Text style={{ fontFamily: "regular", color: "white", fontSize:12 }}>and</Text>
        <Text style={{ fontFamily: "medium", color: "white", fontSize:12 }}>
          234,293 others
        </Text>
      </View>
      <View style={{columnGap:5, paddingHorizontal:10, paddingTop:4}}>
        
        <Text style={{ fontFamily: "regular", color: "white", fontSize:13 }}>{name} Take a brief look at the view from over here, nature is beautiful</Text>
        <Text style={{ fontFamily: "regular", color: "rgba(255,255,255,0.4)", fontSize:12, paddingTop:4 }}>View 8,123 comments</Text>
       
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomColor: "rgba(255,255,255,0.1)",
    borderBottomWidth: 1,
  },
});
