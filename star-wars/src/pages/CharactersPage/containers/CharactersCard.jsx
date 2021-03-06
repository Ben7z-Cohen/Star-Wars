import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../../../redux/user/user-thunk'
import FavoriteButton from '../../../components/FavoriteButton'
import withCard from '../../../HOC/withCard';

const CharactersCard = ({ name }) => {

    const pictureWidth = 300
    const picturehieght = 300
    const pictureUrl = 'https://cdn.commonwealthclub.org/s3fs-public/styles/hero/public/2019-11/hero%20star%20wars.png?itok=waMDC-JL?100x100'

    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(false)
    const CardWithFavoriteButton = withCard(FavoriteButton)

    const currentUser = useSelector(state => state.currentUser)

    useEffect(() => {
        setIsFavorite(currentUser.favorites.indexOf(name) !== -1)
    }, [currentUser.favorites])

    const favoriteButtonWasPushed = () => {
        if (isFavorite) {
            dispatch(removeFromFavorites(currentUser.id, name))
        }
        else {
            dispatch(addToFavorites(currentUser.id, name))
        }
    }

    return (
        <div>
            <CardWithFavoriteButton name={name} width={pictureWidth}
                hieght={picturehieght}
                picUrl={pictureUrl} clickHandler={favoriteButtonWasPushed}
                isFavorite={isFavorite} />
        </div>
    )
}

export default CharactersCard