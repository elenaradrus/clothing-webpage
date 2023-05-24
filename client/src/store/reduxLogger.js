import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import store from '.';

const logger = createLogger();

const storeLogger = configureStore({
  reducer: store,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});