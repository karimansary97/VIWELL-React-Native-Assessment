import { useMemo } from "react";
import { selectWishlist } from "../redux/slices/wishlistSlice";
import { useAppSelector } from "./useAppSelector";
import { findProduct } from "../helpers/functions";

const useIsWishlisted = (id?: number) => {
  const wishlist = useAppSelector(selectWishlist);
  return useMemo(() => findProduct(wishlist, id), [id, wishlist]);
};

export default useIsWishlisted;
