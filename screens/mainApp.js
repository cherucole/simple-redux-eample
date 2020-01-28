import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { increaseCounter, decreaseCounter } from "../store/actions";

const MainApp = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Button
        title="Increase"
        onPress={() => dispatch(increaseCounter(counter))}
      />
      <Text>{counter}</Text>
      <Button
        title="Decrease"
        onPress={() => dispatch(decreaseCounter(counter))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MainApp;
