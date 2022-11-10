// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { wishListSlice } from "./Whishlist";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);
const persistedReducerFav = persistReducer(persistConfig, wishListSlice);

export const store = configureStore({
  reducer: persistedReducer,
  reducerFav: persistedReducerFav,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
