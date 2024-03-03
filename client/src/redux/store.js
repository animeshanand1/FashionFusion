import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './slices/cartSlice';
console.log(cartSlice);
export default configureStore({
  reducer: {
    cart:cartSlice.reducer,
  },
});
