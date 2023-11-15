import { USERS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
        //we r enot just fetching data we re authenticating its a post req so mutation not query
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method : 'POST',
        body: data,
      }),
      keepUnusedDataFor: 5,
    }),
    register: builder.mutation({
        //we r enot just fetching data we re authenticating its a post req so mutation not query
      query: (data) => ({
        url: `${USERS_URL}`,
        method : 'POST',
        body: data,
    }), }),
    logout: builder.mutation({
        query:()=> ({
            url: `${USERS_URL}/logout`,
            method : 'POST',
        }),
    })
  }),
});

export const { useLoginMutation, useRegisterMutation,useLogoutMutation } = usersApiSlice;