import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from './storeSlices/user-slice';
import cardsReducer from './storeSlices/cards-slice'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        currentUser: userReducer,
        cardsReducer: cardsReducer
    },
    middleware: [thunk, logger, ...getDefaultMiddleware()],
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;