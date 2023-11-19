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
    }),
    profile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data,
      }),
    }),
    getUsers: builder.query({
      query:()=>({
        url:  USERS_URL
      }),
      providesTags:['Users'],
      keepUnusedDataFor:5,
    })
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useProfileMutation,
  useGetUsersQuery,
} = usersApiSlice;