import { INCREMENT, DECREMENT } from "./types";

export const increaseCounter = counter => ({
  type: INCREMENT,
  payload: counter
});

export const decreaseCounter = counter => ({
  type: DECREMENT,
  payload: counter
});
