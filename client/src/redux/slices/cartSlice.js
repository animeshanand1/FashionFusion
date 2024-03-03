import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], 
    totalItems: 10, 
  },
 
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems += 1;
    },
    removeFromCart: (state, action) => { 
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.totalItems -= 1; 
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0; 
    },
  },
});

export const { addToCart, clearCart, removeFromCart } = cartSlice.actions; 

export default cartSlice.reducer;
