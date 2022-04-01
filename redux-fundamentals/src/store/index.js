// import { createStore } from "redux";

import { configureStore, createSlice } from "@reduxjs/toolkit";

// const reducerFn = (state = { counter: 10 }, action) => {
//   const { type } = action;

//   if (type === "INC") {
//     return { counter: state.counter + 1 };
//   } else if (type === "DEC") {
//     return { counter: state.counter - 1 };
//   } else if (type === "ADD") {
//     return { counter: state.counter + action.payload };
//   }

//   return state;
// };

// export const store = createStore(reducerFn);

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter += 1;
    },
    decrement(state, action) {
      state.counter -= 1;
    },
    addBy(state, action) {
      console.log(action);
      state.counter += action.payload;
    },
  },
});

export const actions = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});
