import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardsPageView from '../CardsPageView/CardsPageView'
import { requestMovies } from '../../redux/movies/movies-thunk'
import MoviesCard from './components/MoviesCard'

const MoviesPage = () => {

    const dispatch = useDispatch();
    const characters = useSelector(state => state.charactersReducer.entities)
    const userFavorites = useSelector(state => state.currentUser.favorites)
    const movies = useSelector(state => state.moviesReducer.movies)
    const isPending = useSelector(state => state.moviesReducer.isPending)
    const [searchValue, setSearchValue] = useState('')
    const [filteredMovies, setFilteredMovies] = useState([])

    const moviesRef = useRef();
    moviesRef.current = movies

    const onSearchChange = (event) => {
        setSearchValue(event.target.value)
    }
    useEffect(() => {
        dispatch(requestMovies(characters, userFavorites));
    }, [])


    useEffect(() => {
        const moviesNames = moviesRef.current
        setFilteredMovies(moviesNames.filter(movie => {
            return movie.name.toLowerCase().includes(searchValue.toLowerCase())
        }))
    }, [searchValue, moviesRef.current])

    return (
        <div>
            <CardsPageView searchHandler={onSearchChange}
                cardsInformation={filteredMovies} CardComponent={MoviesCard}
                pendingRequest={isPending} pageTitle='Movies' />
        </div>
    )
}

export default MoviesPage
