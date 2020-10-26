
import { apiCall } from '../../server/utilites'


export const getFilmNameByRateOrReleaseDate = async (filmsUrlsHashMap) => {
    let filmsNameByRate = [];
    for (const filmUrl in filmsUrlsHashMap) {
        const film = await apiCall(filmUrl);
        filmsNameByRate.push({
            name: film.title,
            releaseDate: film.release_date,
            rate: filmsUrlsHashMap[filmUrl]
        })
    }
    return filmsNameByRate.sort((a, b) => {
        if (b.rate === a.rate) {
            return compareReleaseDate(a.releaseDate, b.releaseDate)
        }
        return (b.rate - a.rate)
    })
}

const compareReleaseDate = (d1, d2) => {
    var releaseDate1 = new Date(d1)
    var releaseDate2 = new Date(d2)
    if (releaseDate1 < releaseDate2) {
        return 1
    }
    return -1
}


export const rateFilmByFavoriteCharacters = (characters, favoriteCharacters) => {
    let filmsUrlsHashMap = {}
    for (const charactersIndex in characters) {
        for (const filmUrlIndex in characters[charactersIndex].films) {
            const filmUrl = characters[charactersIndex].films[filmUrlIndex]
            if (filmUrl in filmsUrlsHashMap) {
                if (checkIfNameInFavorites(favoriteCharacters,
                    characters[charactersIndex])) {
                    {
                        filmsUrlsHashMap[filmUrl] += 1;
                    }
                }
            }
            else {
                filmsUrlsHashMap[filmUrl] = 0;
            }
        }
    }
    return filmsUrlsHashMap
}

const checkIfNameInFavorites = (favoriteCharacters, entity) => {
    return favoriteCharacters.indexOf(entity.name) !== -1;
}