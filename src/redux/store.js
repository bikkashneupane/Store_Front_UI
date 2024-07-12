import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/UserSlice";

//configure store
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
