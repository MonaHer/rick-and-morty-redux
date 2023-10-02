import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/characters/apiSlice";
import { modalSlice } from "../features/modal/modalSlice";
import { cartSlice } from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    modal: modalSlice.reducer,
    cart: cartSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
