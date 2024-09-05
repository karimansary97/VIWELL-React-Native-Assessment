import { PayloadAction } from "@reduxjs/toolkit";
import { WishlistStateType } from "../redux/slices/wishlistSlice";
import { product } from "../types/ProductsType.type";

export const addProductToWishlist = (
  wishlist: WishlistStateType,
  action: PayloadAction<product>
) => [...wishlist, action.payload];

export const removeProductFromWishlist = (
  wishlist: WishlistStateType,
  action: PayloadAction<number>
) => wishlist.filter((product) => product.id !== action.payload);

export const findProduct = (data: product[], id?: number) => {
  const product = data.find((item) => item.id === id);
  return !!product;
};
