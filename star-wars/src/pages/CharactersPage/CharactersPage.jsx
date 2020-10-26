import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { requestCards } from '../../redux/characters/characters-thunk';
import CardsPageView from '../CardsPageView/CardsPageView'
import CharactersCard from './containers/CharactersCard'

const CharactersPage = () => {

    const dispatch = useDispatch();
    const characters = useSelector(state => state.charactersReducer.entities)
    const isPending = useSelector(state => state.charactersReducer.isPending)
    const [searchValue, setSearchValue] = useState('')
    const [filteredCharacters, setFilteredCharacters] = useState([])

    const onSearchChange = (event) => {
        setSearchValue(event.target.value)
    }
    useEffect(() => {
        dispatch(requestCards());
    }, [])

    useEffect(() => {
        setFilteredCharacters(characters.filter(characters => {
            return characters.name.toLowerCase().includes(searchValue.toLowerCase());
        }))
    }, [searchValue, characters])

    return (
        <div>
            <CardsPageView searchHandler={onSearchChange}
                cardsInformation={filteredCharacters} CardComponent={CharactersCard}
                pendingRequest={isPending} pageTitle='StarWars' />
        </div>
    )
}

export default CharactersPage;