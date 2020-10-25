import React from 'react';
import Card from './Card';

const CardList = ({ cards }) => {
    return (
        <div>
            {cards.map((user, i) => {
                return (
                    <Card key={i}
                    name={cards[i].name}
                    />
                );
            })} 
        </div>
    );
}

export default CardList;