import { addToFireBaseFavorites, removeFromFireBaseFavorites } from './../../firebase/firebase-utils'
import { addFavoriteToStore, removeFavoriteFromStore, signOut } from './user-slice'

export const addToFavorites = (userId, name) => {
    return async dispatch => {
        try {
            dispatch(addFavoriteToStore(name))
            await (addToFireBaseFavorites(userId, name))
        }
        catch (error) {
            alert(error)
        }
    }
}

export const removeFromFavorites = (userId, name) => {
    return async dispatch => {
        try {
            dispatch(removeFavoriteFromStore(name))
            await (removeFromFireBaseFavorites(userId, name))
        }
        catch (error) {
            alert(error)
        }
    }
}

export const signOutAndClearSession = (auth) => {
    return async dispatch => {
        try {
            await auth.signOut()
            dispatch(signOut())
        }
        catch (error) {
            alert(error)
        }
    }
}