import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isPending: false,
    entities: [],
}

const charactersSlice = createSlice({
    name: 'requestCharacters',
    initialState,
    reducers: {
        requestPending: (state) => {
            return {
                ...state,
                isPending: true
            }
        },
        requestSuccess: (state, action) =>  {
            return {
                ...state,
                isPending: false,
                entities: action.payload
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

const { actions, reducer } = charactersSlice;

export const { requestPending, requestSuccess, requestFail } = actions;



export default reducer