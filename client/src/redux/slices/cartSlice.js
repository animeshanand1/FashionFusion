import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    initialState:[],
    name:'cart',
    reducers:{
        addToCart:(state,action)=>{
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.push({ ...action.payload, quantity: 1 });
            }
          },
        removefromCart: (state, action) => {
            
            return state.filter(item => item.id !== action.payload.id);
          },

        clearCart: (state) => {

            return [];
          }
    }
})

export const {addToCart,clearCart,removefromCart}=cartSlice.actions;

export default cartSlice.reducer