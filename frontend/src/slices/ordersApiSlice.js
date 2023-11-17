import { ORDERS_URL,PAYPAL_URL } from "../constants"
import { apiSlice } from "./apiSlice"




export const ordersApiSlice = apiSlice.injectEndpoints({
endpoints:(builder)=> ({
    createOrder: builder.mutation({
        query:(order)=> ({
            url:ORDERS_URL,
            method: 'POST',
            body:order
        }),
    }),
    getOrderDetails: builder.query({
        // fetch order detaisl from mongodb
        query: (id) => ({
          url: `${ORDERS_URL}/${id}`,
        }),
        keepUnusedDataFor: 5,
      }),
    payOrder:builder.mutation({
        query: ({orderId,details}) => ({
        url:`${ORDERS_URL}/${orderId}/pay`,
        method:'PUT',
        body:{...details},
    })  }),
    getPaypalClientId: builder.query({
        query: () => ({
          url: PAYPAL_URL,
        }),
        keepUnusedDataFor: 5,
      }),
      getMyOrders: builder.query({
        query: () => ({
          url: `${ORDERS_URL}/mine`,
        }),
        keepUnusedDataFor: 5,
      }),
      getOrders: builder.query({
        query: () => ({
          url: `${ORDERS_URL}`,
        }),
        keepUnusedDataFor: 5,
      }),
})
}) 


export const {
    useCreateOrderMutation,
    useGetOrderDetailsQuery,
    usePayOrderMutation,
    useGetPaypalClientIdQuery,
    useGetMyOrdersQuery,
    useGetOrdersQuery,
  } = ordersApiSlice;