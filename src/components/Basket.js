import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
// import useNavigation from "@react-navigation/stack";
// import { useNavigation } from "@react-navigation/native";

// import { withNavigation } from "react-navigation";

import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Basket = (props) => (
  <TouchableOpacity
    style={[
      { padding: 5 },
      Platform.OS == "android" ? styles.iconContainer : null,
    ]}
  >
    <View
      style={{
        position: "absolute",
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: "rgba(95,197,123,0.8)",
        right: 15,
        bottom: 15,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2000,
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>
        {props.cartItems.length}
      </Text>
    </View>
    <Icon name="ios-cart" size={30} />
  </TouchableOpacity>
);

const mapStateToProps = (state) => {
  return {
    cartItems: state,
  };
};

export default connect(mapStateToProps)(Basket);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    paddingLeft: 20,
    paddingTop: 10,
    marginRight: 5,
  },
});
