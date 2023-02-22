import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsArray: []
}

const ProductsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        SET_ACTIVE_PRODUCTS: (state, action) => {
            state.productsArray = action.payload
        },
    }
})

export const {SET_ACTIVE_PRODUCTS} = ProductsSlice.actions;

export const allProducts = (state) => state.products.productsArray;

export default ProductsSlice.reducer;