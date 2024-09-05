import { configureStore } from "@reduxjs/toolkit";
import { products } from "../api/api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [products.reducerPath]: products.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(products.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
