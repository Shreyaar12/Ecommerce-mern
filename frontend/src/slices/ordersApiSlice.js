import { ORDERS_URL } from "../constants"
import { apiSlice } from "./apiSlice"




export const ordersApiSlice = apiSlice.injectEndpoints({
endpoints:(builder)=> ({
    createOrder: builder.mutation({
        query:(order)=> ({
            url:ORDERS_URL,
            method: 'POST',
            body:{...order}
        }),
    }),
    getOrderDetails: builder.query({
        // fetch order detaisl from mongodb
        query: (id) => ({
          url: `${ORDERS_URL}/${id}`,
        }),
        keepUnusedDataFor: 5,
      }),
})
}) 

export const {useCreateOrderMutation, useGetOrderDetailsQuery} = ordersApiSlice;