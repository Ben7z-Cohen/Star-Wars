import { apiCall } from '../../server/utilites'


export const collectAllCharacters = async () => {
    let next = '';
    let counter = 1;
    let entities = [];
    while (next !== null) {
        const response = await apiCall(`https://swapi.dev/api/people/?page=${counter}`);
        next = response.next;
        counter += 1;
        entities = entities.concat(response.results);
    }
    return entities;
}