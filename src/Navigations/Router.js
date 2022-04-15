import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Electronics from "../screens/Electronics";
import Books from "../screens/Books";
import Basket from "../components/Basket";
import Cart from "../screens/Cart";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "Shopping App",
        headerRight: () => <Basket />,
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="electronics" component={Electronics} />
      <Stack.Screen name="books" component={Books} />
      <Stack.Screen name="cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
