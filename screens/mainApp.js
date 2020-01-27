import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";

import { increaseCounter, decreaseCounter } from "../store/actions";

const MainApp = props => {
  const addition = counter => {
    props.dispatch(increaseCounter(counter));
  };
  const subtraction = counter => {
    props.dispatch(decreaseCounter(counter));
  };
  const { counter } = props; //instead of props.counter just destructure it
  return (
    <View style={styles.container}>
      <Button title="Increase" onPress={() => addition(counter)} />
      {/* withount destructuring we would call props.counter, after mapstatetoprops */}
      <Text>{counter}</Text>
      <Button title="Decrease" onPress={()=>subtraction(counter)} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default connect(mapStateToProps)(
  MainApp
);
