import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/UserSlice";
import productReducer from "../features/product/ProductSlice";
import cartReducer from "../features/cart/cartSlice";
import catrgoryReducer from "../features/category/categorySlice";
import darkModeReducer from "./darkModeSlice";
import orderReducer from "../features/order/orderSlice";
import reviewReducer from "../features/review/reviewSlice";

//configure store
const store = configureStore({
  reducer: {
    user: userReducer,
    categories: catrgoryReducer,
    products: productReducer,
    carts: cartReducer,
    orders: orderReducer,
    reviews: reviewReducer,
    darkMode: darkModeReducer,
  },
});

export default store;
