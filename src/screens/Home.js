import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import Button from "../components/Button";

const Home = ({ title, navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#c4fff9" }}>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "red",
            position: "relative",
            left: -40,
            width: 430,
            borderRadius: 20,
            margin: 15,
            shadowColor: "#171717",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.4,
            shadowRadius: 2,
          }}
        >
          <Button
            image={require("../../assets/bikini.png")}
            title="Ladies Tops"
            onPress={() => navigation.navigate("electronics")}
          />
        </View>
        <View
          style={{
            backgroundColor: "#60d394",
            position: "relative",
            // left: 5,
            width: 430,
            borderRadius: 20,
            margin: 15,
            flexDirection: "row",
            shadowColor: "#171717",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.4,
            shadowRadius: 2,
          }}
        >
          <Button
            image={require("../../assets/bikini.png")}
            onPress={() => navigation.navigate("electronics")}
            title="Jewelry"
          />
        </View>
        <View
          style={{
            backgroundColor: "#ff9505",
            position: "relative",
            width: "100%",
            borderRadius: 20,
            marginBottom: 2,
            shadowColor: "#171717",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.4,
            shadowRadius: 2,
          }}
        >
          <Button
            title="Body Affection"
            onPress={() => navigation.navigate("electronics")}
          />
        </View>
        <View
          style={{
            backgroundColor: "#f72585",
            position: "relative",
            left: 5,
            width: 400,
            borderBottomLeftRadius: 20,
            borderTopLeftRadius: 20,
            marginBottom: 8,
            shadowColor: "#171717",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.4,
            shadowRadius: 2,
          }}
        >
          <Button title="Bra" onPress={() => navigation.navigate("books")} />
        </View>
        <View
          style={{
            backgroundColor: "#7209b7",
            position: "relative",
            right: -20,
            width: 375,
            borderRadius: 20,
            marginBottom: 12,
            shadowColor: "#171717",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.4,
            shadowRadius: 2,
          }}
        >
          <Button title="Undies" onPress={() => navigation.navigate("books")} />
        </View>
        <View
          style={{
            backgroundColor: "#780000",
            position: "relative",
            left: -20,
            width: "100%",
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            margin: 3,
            shadowColor: "#171717",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.4,
            shadowRadius: 2,
          }}
        >
          <Button
            title="strings"
            onPress={() => navigation.navigate("books")}
          />
        </View>
        {/* <View
          style={{
            backgroundColor: "#70e000",
            position: "relative",
            left: 190,
            width: 240,
            position: "absolute",
            bottom: -10,
            right: 100,
            borderBottomLeftRadius: 20,
            borderTopLeftRadius: 20,
            shadowColor: "#171717",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.4,
            shadowRadius: 2,
          }}
        >
          <Button
            title="Heels & Sneakers"
            onPress={() => navigation.navigate("books")}
          />
        </View> */}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    position: "absolute",
  },
});
