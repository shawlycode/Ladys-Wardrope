import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { books } from "../Dummy_Data/Data";
import Products from "../components/Products";
import { connect } from "react-redux";
class Books extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Products products={books} onPress={this.props.addItemToCart} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) =>
      dispatch({ type: "ADD_TO_CART", payload: product }),
  };
};
export default connect(null, mapDispatchToProps)(Books);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
