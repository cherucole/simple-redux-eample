import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";

import MainApp from "./screens/mainApp";
import { mainReducer } from "./store/reducers";

const store = createStore(mainReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}