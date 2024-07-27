import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/UserSlice";
import productReducer from "../features/product/ProductSlice";
import cartReducer from "../features/cart/cartSlice";

//configure store
const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
