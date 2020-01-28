import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MainApp from "./screens/mainApp";
import { mainReducer } from "./store/reducers";

/* if we had more than one reducer we use combine reducers like below, then pass root
reducer to createstore. From our components we can then access what we 
want using state.reducername.whatwewant e.g state.main.counter for below */

// const rootReducer = combineReducers({
//   main: mainReducer
// });
// const store = createStore(rootReducer);

const store = createStore(mainReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
