import { INCREMENT, DECREMENT } from "./types";

export const increaseCounter = counter => ({
  type: INCREMENT,
  payload: counter + 1
});

export const decreaseCounter = counter => ({
  type: DECREMENT,
  payload: counter - 1,
});
