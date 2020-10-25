import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToFavorite, removeFromFavorite } from '../../../redux/storeSlices/user-slice'

const Card = ({ name }) => {

    const dispatch = useDispatch();
    const favoriteNames = useSelector(state => state.currentUser.favorites)
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        setIsFavorite(favoriteNames.includes(name))
    }, [favoriteNames])

    const favoriteButtonWasPushed = () => {
        if (isFavorite) {
            dispatch(removeFromFavorite(name))
        }
        else {
            dispatch(addToFavorite(name))
        }
    }


    return (
        <div className='tc grow br3 pa3 ma2 dib bw2 shadow-5' style={{ background: '#0ccac4' }}>
            <div onClick={() => favoriteButtonWasPushed()}>
                {isFavorite ?
                    <button>Favorite</button> :
                    <button >Not Favorite</button>
                }
            </div>
            <img alt='cards'
                style={{ width: '300px', height: '300px' }}
                src={`https://cdn.commonwealthclub.org/s3fs-public/styles/hero/public/2019-11/hero%20star%20wars.png?itok=waMDC-JL?100x100`} />
            <div >
                <h2> {name} </h2>
            </div>
        </div>
    );
}

export default Card;