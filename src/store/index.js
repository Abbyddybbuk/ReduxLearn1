// import { configureStore } from '@reduxjs/toolkit';
import { createStore } from "redux";
import { combineReducers } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.counter,
    };
  } else if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.counter,
    };
  } else if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.counter,
    };
  } else if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.counter,
    };
  } else {
    console.log("Current State ", state);
    return state;
  }
};

// const reducer = combineReducers({
//     counterReducer
// });

// const store = configureStore({ reducer });
const store = createStore(counterReducer);

export default store;
