import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
    products: [],
    loading: false,
    error: null,
};

// async thunk for fetching the data
const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async () => {
    try {
        const response = await axios.get('http://localhost:5000/product/all-products');
        const productData= response.data;
        
        return productData;
    } catch (error) {
        console.error(error);
        throw error;
    }
    
});


// productSlice
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.products;
                state.error = null;
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
export default productSlice.reducer;
export { fetchAllProducts}
export const { } = productSlice.actions;