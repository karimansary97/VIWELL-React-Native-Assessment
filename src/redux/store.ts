import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { products } from "./queries/products"; // RTK Query slice
import { setupListeners } from "@reduxjs/toolkit/query";
import wishlistSlice from "./slices/wishlistSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

// Combine your reducers
const rootReducer = combineReducers({
  wishlist: wishlistSlice.reducer,
  [products.reducerPath]: products.reducer, // RTK Query's API reducer
});

// Persist configuration for redux-persist
const persistConfig = {
  key: "root",
  storage: AsyncStorage, // AsyncStorage for React Native
};

// Wrap the combined reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(products.middleware);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer
  middleware: middleware, // Add RTK Query's middleware
});

// Set up RTK Query listeners
setupListeners(store.dispatch);

// Set up redux-persist's persistor
export const persistor = persistStore(store);

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
