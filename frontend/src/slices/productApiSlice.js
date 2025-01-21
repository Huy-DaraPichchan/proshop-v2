import { PRODUCT_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: () => ({
                url: PRODUCT_URL,
            }),
            // value in seconds
            keepUnusedDataFor: 5
        }),
        getProductDetails: builder.query({
            //pass request param 
            query: (productId) => ({
                url: `${PRODUCT_URL}/${productId}`
            }),
            // value in seconds
            keepUnusedDataFor: 5
        })
    })
})


export const { useGetProductQuery, useGetProductDetailsQuery } = productApiSlice