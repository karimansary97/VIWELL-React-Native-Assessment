import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import ProductsType, { product } from "../types/ProductsType.type";

export const products = createApi({
  reducerPath: "apiProducts",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL }),
  keepUnusedDataFor: 30,
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query<product[], { skip: number; limit?: number }>({
      query: ({ limit = 10, skip = 0 }) =>
        `/products?limit=${limit}&skip=${skip}&select=id,thumbnail,title,price`,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      transformResponse: (data: ProductsType) => data?.products,
      merge: (currentDataCache, newData, { arg: { skip } }) => {
        if (skip === 0) {
          return newData;
        }
        return [...currentDataCache, ...newData];
      },
      providesTags: (result = []) =>
        result
          ? result.map(({ id }) => ({ type: "products", id }))
          : ["products"],
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetProductsQuery } = products;
