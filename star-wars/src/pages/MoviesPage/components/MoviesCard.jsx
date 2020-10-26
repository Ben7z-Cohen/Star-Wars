import React from 'react';
import withCard from '../../../HOC/withCard';

const MoviesCard = ({ name }) => {
    const pictureWidth = 300
    const picturehieght = 300
    const pictureUrl = 'https://indianfolk.com/wp-content/uploads/2018/10/Movie.jpg'

    const Card = withCard()
    
    return (
        <div>
            <Card name={name} width={pictureWidth} hieght={picturehieght}
                picUrl={pictureUrl} />
        </div>
    )
}

export default MoviesCard
