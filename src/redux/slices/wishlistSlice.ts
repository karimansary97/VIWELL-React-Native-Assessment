import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { product } from "../../types/ProductsType.type";
import {
  addProductToWishlist,
  removeProductFromWishlist,
} from "../../helpers/functions";

export type WishlistStateType = product[];

const initialState: WishlistStateType = [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addProduct: addProductToWishlist,
    removeProduct: removeProductFromWishlist,
  },
});

export const { addProduct, removeProduct } = wishlistSlice.actions;

export const selectWishlist = (state: RootState) => state.wishlist;

export default wishlistSlice;
