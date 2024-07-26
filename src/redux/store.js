import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/UserSlice";
import productReducer from "../features/product/ProductSlice";

//configure store
const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
  },
});

export default store;
