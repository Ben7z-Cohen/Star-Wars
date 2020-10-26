import { requestPending, requestSuccess, requestFail } from './movies-slice'
import { getFilmNameByRateOrReleaseDate, rateFilmByFavoriteCharacters } from './utilites'

export const requestMovies = (characters, favoriteCharacters) => {
    return async dispatch => {
        dispatch(requestPending());
        try {
            const filmUrlsHashMap = rateFilmByFavoriteCharacters(characters,
                favoriteCharacters);
            const filmNameByRate = await getFilmNameByRateOrReleaseDate(filmUrlsHashMap);
            dispatch(requestSuccess(filmNameByRate))
        }
        catch (error) {
            dispatch(requestFail(error))
        }
    }
}



