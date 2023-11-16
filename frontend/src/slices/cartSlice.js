//no need to use api so cartSlice function
import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils.js';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [], shippingAddress:{}, paymentMethod :'PayPal'};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // The item to add to the cart
      const item = action.payload;
         // Check if the item is already in the cart
         const existItem = state.cartItems.find((x) => x._id === item._id);

         if (existItem) {
           // If exists, update quantity
           state.cartItems = state.cartItems.map((x) =>
             x._id === existItem._id ? item : x
           );
         } else {
           // If not exists, add new item to cartItems
           state.cartItems = [...state.cartItems, item];
         }

      // Update the cart state using the updateCart function
      return updateCart(state,item);
    },
    removeFromCart: (state, action) => {
      // Filter out the item to remove from the cart
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);

      // Update the prices and save to storage
      return updateCart(state);
    },
    saveShippingAddress:(state,action) => {
      state.shippingAddress= action.payload;
      return updateCart(state);
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    clearCartItems: (state, action) =>{

state.cartItems=[];
return updateCart(state);
    }
  },
});

export const {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;