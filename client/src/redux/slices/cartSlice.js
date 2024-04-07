import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], 
    totalItems: 0, 
  },
 
  reducers: {
    addToCart(state, action) {
      console.log(action.payload, 'Type of action.payload in addToCart');
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems += 1;
      state.totalPrice = calculateTotalPrice(state.items);
    },
    removeFromCart(state, action) {
      const { id } = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      state.totalItems -= 1;
    },
    clearCart(state) {
      state.items = [];
      state.totalItems = 0;
    },
    fetchCartItems(state, action) {
      state.items = action.payload;
      // state.totalItems = action.payload.reduce((total, item) => total + item.quantity, 0);
    }
  }
});



export const { addToCart, clearCart, removeFromCart,fetchCartItems } = cartSlice.actions; 

export default cartSlice.reducer;
