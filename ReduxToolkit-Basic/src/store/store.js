import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Slicers/CountSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;
