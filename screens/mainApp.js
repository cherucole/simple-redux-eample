import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";

import { increaseCounter, decreaseCounter } from "../store/actions";

const MainApp = props => {
  return (
    <View style={styles.container}>
      <Button title="Increase" onPress={props.increase} />
      <Text>{props.counter}</Text>
      <Button title="Decrease" onPress={props.decrease} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increase: () => dispatch({ type: "INCREMENT" }),
    decrease: () => dispatch({ type: "DECREMENT" })
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
