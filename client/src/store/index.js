import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { createLogger } from 'redux-logger';


import cartReducer from './Cart/reducer';

const logger = createLogger();

const rootReducer = combineReducers({
    cart: cartReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [logger]
});

export default store;