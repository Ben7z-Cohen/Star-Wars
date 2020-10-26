import { requestPending, requestSuccess, requestFail } from './characters-slice'
import { collectAllCharacters } from './utilites'

export const requestCards = () => {
    return async dispatch => {
        dispatch(requestPending());
        try {
            //Todo: make this functio more readable and clean.
            let entities = await collectAllCharacters();
            dispatch(requestSuccess(entities))
        }
        catch (error) {
            dispatch(requestFail(error))
        }
    }
}


