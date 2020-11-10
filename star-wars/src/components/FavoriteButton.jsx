import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const FavoriteButton = ({ clickHandler, isFavorite }) => {
    return (
        <div className="ml7" onClick={() => clickHandler()}>
            {isFavorite ?
                <FavoriteIcon style={{ fontSize: '2.5rem' }} /> :
                <FavoriteBorderIcon style={{ fontSize: '2.5rem' }} />
            }
        </div>
    )
}

export default FavoriteButton