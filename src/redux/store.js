import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/UserSlice";
import productReducer from "../features/product/ProductSlice";
import cartReducer from "../features/cart/cartSlice";
import catrgoryReducer from "../features/category/categorySlice";
import darkModeReducer from "./darkModeSlice";
import orderReducer from "../features/order/orderSlice";

//configure store
const store = configureStore({
  reducer: {
    user: userReducer,
    categories: catrgoryReducer,
    products: productReducer,
    cart: cartReducer,
    order: orderReducer,
    darkMode: darkModeReducer,
  },
});

export default store;
