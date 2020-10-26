import React from 'react';

const CardsList = ({ cardsInformation, CardComponent }) => {
    return (
        <div className="flex flex-wrap justify-around">
            {cardsInformation.map((entity, i) => {
                return (
                    <CardComponent key={i}
                        name={cardsInformation[i].name}
                    />
                );
            })}
        </div>
    );
}

export default CardsList;