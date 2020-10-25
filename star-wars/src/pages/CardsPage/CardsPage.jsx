import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import ErrorBoundry from './components/ErrorBoundry';
import { requestCards } from '../../redux/storeSlices/cards-slice';
import { getUserFavoriteData, addCollectionAndDocuments } from '../../firebase/firebase-utils';
import { setFavorites } from '../../redux/storeSlices/user-slice'
import './CadsPage.module.css'

const CardsPageContainer = () => {

    const dispatch = useDispatch();
    const cards = useSelector(state => state.cardsReducer.cards)
    const isPending = useSelector(state => state.cardsReducer.isPending)
    const [searchValue, setSearchValue] = useState('')
    const [filteredCards, setFilteredCards] = useState([])

    const currentUser = useSelector(state => state.currentUser)
    const favoriteNames = useSelector(state => state.currentUser.favorites)

    const onSearchChange = (event) => {
        setSearchValue(event.target.value)
    }
    useEffect(() => {
        dispatch(requestCards());

    }, [])

    useEffect(() => {
        setFilteredCards(cards.filter(card => {
            return card.name.toLowerCase().includes(searchValue.toLowerCase());
        }))
    }, [searchValue, cards])


    useEffect(() => {
        async function addCollectionToUserDB() {
            if (currentUser.id) {
            await addCollectionAndDocuments(currentUser.id).update({ favorites: favoriteNames })
            }
        }
        return () => {addCollectionToUserDB().
            then(resolve => setTimeout(resolve, 1)) };
    }, [currentUser.id])

    useEffect(() => {
        async function getFavoriteData() {
            if (currentUser.id) {
                const favorites = await getUserFavoriteData(currentUser.id)
                dispatch(setFavorites(favorites))
            }
        }
        getFavoriteData();
    }
        , [currentUser.id])

    return (
        <div className='tc'>
            <h1 className='f1' >
                StarWars </h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                {isPending ?
                    <h1> Loading </h1> :
                    <ErrorBoundry >
                        <CardList cards={filteredCards} />
                    </ErrorBoundry>}
            </Scroll>
        </div>
    )
}

export default CardsPageContainer;