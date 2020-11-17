import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "../CreateSlice/counterSlice";

export const store = configureStore({
  reducer: combineReducers({
    // this name of the reducer is important to access the reducer
    counterReducer: counterSlice,
  }),
});

export const RootState = store.getState;
