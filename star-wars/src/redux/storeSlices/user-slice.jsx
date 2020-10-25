import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    id: '',
    favorites: []
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
                    id: action.payload.id
                }
            }
            return initialState
        },
        setFavorites: (state, action) => {
            return {
                ...state,
                favorites: action.payload
            }
        },
        addToFavorite: (state, action) => {
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        },
        removeFromFavorite: (state, action) => {
            return {
                ...state,
                favorites: state.favorites.filter(item => item !== action.payload)
                    
            }
        }
    }
}
);



const { actions, reducer } = userSlice;

export const { setUser, setFavorites, addToFavorite, removeFromFavorite } = actions;

export default reducer