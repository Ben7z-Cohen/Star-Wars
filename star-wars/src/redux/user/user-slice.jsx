import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    id: '',
    favorites: [],
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUser: (state, action) => {
            if (action.payload) {
                return {
                    ...state,
                    name: action.payload.displayName,
                    email: action.payload.email,
                    id: action.payload.id,
                    favorites: action.payload.favorites,
                }
            }
            return initialState
        },
        signOut: () => {
            return initialState
        },
        addFavoriteToStore: (state, action) => {
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        },
        removeFavoriteFromStore: (state, action) => {
            return {
                ...state,
                favorites: state.favorites.filter(item => item !== action.payload)
            }
        }
    }
}
);


const { actions, reducer } = userSlice;

export const { setUser, addFavoriteToStore, removeFavoriteFromStore, signOut } = actions;

export default reducer