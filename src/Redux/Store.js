import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import UserReducer from './user/slice';

const rootReducer = combineReducers({
    user: UserReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;