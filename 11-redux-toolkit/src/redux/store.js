import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"

// Create and Configure the Store
export const store = configureStore({
  reducer: {
    // SliceName : Reducer
    counter: counterReducer
  },
});
