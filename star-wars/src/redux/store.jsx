import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from './user/user-slice';
import charactersReducer from './characters/characters-slice'
import moviesReducer from './movies/movies-slice'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        currentUser: userReducer,
        charactersReducer: charactersReducer,
        moviesReducer: moviesReducer
    },
    middleware: [thunk, logger, ...getDefaultMiddleware()],
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;