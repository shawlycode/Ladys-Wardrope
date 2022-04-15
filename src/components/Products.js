import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
} from "react-native";

class Products extends Component {
  renderProducts = (products) => {
    console.log(products);
    return products.map((item, index, image) => {
      return (
        <View key={index}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>{item.name}</Text>
          <Image
            source={item.image}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
          <Button
            onPress={() => this.props.onPress(item)}
            title={"Add To Cart"}
          />
        </View>
      );
    });
  };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {this.renderProducts(this.props.products)}
        </View>
      </ScrollView>
    );
  }
}
export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
