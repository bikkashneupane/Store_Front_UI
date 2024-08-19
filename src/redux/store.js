import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/UserSlice";
import productReducer from "../features/product/ProductSlice";
import cartReducer from "../features/cart/cartSlice";
import catrgoryReducer from "../features/category/categorySlice";
import darkModeReducer from "./darkModeSlice";
import orderReducer from "../features/order/orderSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  categories: catrgoryReducer,
  products: productReducer,
  cart: cartReducer,
  order: orderReducer,
  darkMode: darkModeReducer,
});

// Configure persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "darkMode"], // Specify which reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(thunk),
});

export const persistor = persistStore(store);
