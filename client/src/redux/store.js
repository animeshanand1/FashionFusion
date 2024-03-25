import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './slices/cartSlice';
import productSlice, {fetchAllProducts} from './slices/productSlice';
// console.log(cartSlice);
export default configureStore({
  reducer: {
    cart:cartSlice.reducer,
    product:productSlice
  },
});
