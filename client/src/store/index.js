import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';


import cartReducer from './Cart/reducer';

const rootReducer = combineReducers({
    cart: cartReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;