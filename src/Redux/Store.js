import { configureStore, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import UserReducer from './user/slice';
import ProductsReducer from './products/slice';
import CartSlice from './cart/slice';

const rootReducer = combineReducers({
    user: UserReducer,
    products: ProductsReducer,
    cart: CartSlice
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;