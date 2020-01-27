import { INCREMENT, DECREMENT } from "./types";

const initialState = {
  counter: 0
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log("Addition triggered");
      return { ...state, counter: action.payload + 1 };

    case DECREMENT:
      console.log("Subtraction triggered");
      return { ...state, counter: action.payload - 1 };

    default:
      return state;
  }
};
