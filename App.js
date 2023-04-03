import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useCallback } from "react";
import Story from "./components/Story";
import Post from "./components/Post";

export default function App() {
  const [fontsLoaded] = useFonts({
    instagram: require("./assets/fonts/instagram-font.otf"),
    medium: require("./assets/fonts/Inter-Medium.ttf"),
    regular: require("./assets/fonts/Inter-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={false} backgroundColor={"black"} />
      <View style={styles.head}>
        <Text style={{ fontFamily: "instagram", color: "white", fontSize: 30 }}>
          Instagram
        </Text>
        <View style={{ flexDirection: "row", columnGap: 17 }}>
          <Feather color={"white"} size={25} name="heart" />
          <Feather color={"white"} size={25} name="send" />
        </View>
      </View>
      <ScrollView overScrollMode="never" contentContainerStyle={{ flexDirection: "column", paddingBottom:70 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          overScrollMode={"never"}
          contentContainerStyle={styles.stories}
        >
          <Story isMyStory={true} />
          <Story text="Pysavant" isMyStory={false} />
          <Story text="James" isMyStory={false} />
          <Story text="Tess" isMyStory={false} />
          <Story text="Justin" isMyStory={false} />
          <Story text="Broo" isMyStory={false} />
          <Story text="Mimi" isMyStory={false} />
        </ScrollView>
        <Post
          
          image={"https://assets.entrepreneur.com/content/3x2/2000/20191127190639-shutterstock-431848417-crop.jpeg"}
          profile={
            "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
          }
          name={"james.doe"}
        />
        <Post
        image={
          "https://cdn.britannica.com/65/132165-050-EF2D11F2/roller-skater.jpg"
        }
          profile={
            "https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg"
          }
          name={"dontwizzy"}
        />
        <Post
          profile={
            "https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU="
          }
          image={
            "https://images.theconversation.com/files/479421/original/file-20220816-10908-uvh62x.jpg?ixlib=rb-1.1.0&rect=4%2C5%2C994%2C497&q=45&auto=format&w=668&h=324&fit=crop"
          }
          name={"ussopcodes"}
        />
        <Post
          image={
            "https://music.columbia.edu/sites/default/files/styles/dept_banner/public/images/dsc_04461.jpg?itok=gA0nEf7k"
          }
          profile={
            "https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
          }
          name={"john.kess"}
        />
      </ScrollView>
      <View style={styles.bottomBar}>
        <Feather color={"white"} size={25} name="home" />
        <Feather color={"white"} size={25} name="search" />
        <Feather color={"white"} size={25} name="plus-square" />
        <Feather color={"white"} size={25} name="video" />
        <Image
          style={{ width: 25, height: 25, borderRadius: 35 }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    
  },
  head: {
    flexDirection: "row",
    padding: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  stories: {
    overflow: "hidden",
    flexDirection: "row",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 13,
    paddingHorizontal: 22,
  },
});
