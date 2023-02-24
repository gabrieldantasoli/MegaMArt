import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        ADD_PRODUCT: (state, action) => {
            //Verificar se o produto esta no carrinho:
            const productIsAlreadyInCart = state.products.some(
                (product) => product.code === action.payload.code
            );

            // Produto já está no carrinho ?
            if (productIsAlreadyInCart) {
                state.products = state.products.map(
                    (product) => product.code === action.payload.code ? {...product, quantity: product.quantity + 1} : product
                );

                return;
            }

            // Se não estiver ....
            state.products = [...state.products, {...action.payload,quantity: 1}]
        },
        INCREASE_PRODUCT_QUANTITY: (state, action) => {
            state.products = state.products.map(
                (product) => product.code === action.payload ? {...product, quantity: product.quantity + 1} : product
            );
        },
        DECREASE_PRODUCT_QUANTITY: (state, action) => {
            state.products = state.products.map(
                (product) => product.code === action.payload ? {...product, quantity: product.quantity - 1} : product
            ).filter(product => product.quantity > 0);
        },
        REMOVE_PRODUCT: (state, action) => {
            state.products = state.products.filter(
                (product) => product.code !== action.payload
            );
        },
        CLEAR_CART: (state, action) => {
            state.products = [];
        }
    }
})

export const { ADD_PRODUCT , INCREASE_PRODUCT_QUANTITY , DECREASE_PRODUCT_QUANTITY , REMOVE_PRODUCT,CLEAR_CART } = CartSlice.actions;

export const cartProducts = (state) => state.cart.products;

export default CartSlice.reducer;