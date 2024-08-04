import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/UserSlice";
import productReducer from "../features/product/ProductSlice";
import cartReducer from "../features/cart/cartSlice";
import catrgoryReducer from "../features/category/categorySlice";

//configure store
const store = configureStore({
  reducer: {
    user: userReducer,
    categories: catrgoryReducer,
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
