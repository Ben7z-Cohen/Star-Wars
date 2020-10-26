import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isPending: false,
    movies: [],
}

const moviesSlice = createSlice({
    name: 'requestMovies',
    initialState,
    reducers: {
        requestPending: (state) => {
            return {
                ...state,
                isPending: true
            }
        },
        requestSuccess: (state, action) =>  {
            console.log(action.payload)
            return {
                ...state,
                isPending: false,
                movies: action.payload
            }
        },
        requestFail: (state, action) => {
            return {
                ...state,
                error: action.payload.error
            }
        }
    }
})

const { actions, reducer } = moviesSlice;

export const { requestPending, requestSuccess, requestFail } = actions;



export default reducer