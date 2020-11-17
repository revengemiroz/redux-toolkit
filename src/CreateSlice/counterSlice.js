import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterReducer",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },

    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

//need to exoprt for the reducers increment and decrement
export const { increment, decrement } = counterSlice.actions;

//this is just the selector name is from the store name
export const counterSelector = (state) => state.counterReducer;

//need to export for the name and value
export default counterSlice.reducer;
