import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/UserSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";

//combine reducers
const rootReducer = {
  user: userReducer,
};

// configure persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"], // which reducer to persist
};

// persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// configure store
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
