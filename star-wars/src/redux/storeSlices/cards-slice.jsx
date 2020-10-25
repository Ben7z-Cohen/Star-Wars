import { createSlice } from "@reduxjs/toolkit";

export const apiCall = (link) =>
    fetch(link).then(response => response.json())

const initialState = {
    isPending: false,
    cards: [],
}

const cardsSlice = createSlice({
    name: 'requestCards',
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
                cards: action.payload
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

const { actions, reducer } = cardsSlice;

export const { requestPending, requestSuccess, requestFail } = actions;

export const requestCards = () => {
    return async dispatch => {
        dispatch(requestPending());
        try {
            //Todo: make this functio more readable and clean.
            let next = '';
            let counter = 1
            let robots = []
            while (next != null) {
                const response = await apiCall(`https://swapi.dev/api/people/?page=${counter}`);
                next = response.next
                counter += 1
                robots = robots.concat(response.results)
            }
            dispatch(requestSuccess(robots))
        }
        catch (error) {
            dispatch(requestFail(error))
        }
    }
}

export default reducer