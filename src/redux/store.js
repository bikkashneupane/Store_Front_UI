import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/UserSlice";
import productReducer from "./slice/ProductSlice";

//configure store
const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
  },
});

export default store;
