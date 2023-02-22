import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import UserReducer from './user/slice';
import ProductsReducer from './products/slice';

const rootReducer = combineReducers({
    user: UserReducer,
    products: ProductsReducer
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;