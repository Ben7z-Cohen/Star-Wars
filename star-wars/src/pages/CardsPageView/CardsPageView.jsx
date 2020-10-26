import React from 'react'
import CardsList from '../../components/CardsList';
import SearchBox from '../../components/SearchBox';
import Scroll from '../../components/Scroll';
import ErrorBoundry from '../../containers/ErrorBoundry/ErrorBoundry';
import './CardsPage.module.css'


const CardsPageView = ({ searchHandler, cardsInformation,
    CardComponent, pendingRequest, pageTitle }) => {
    return (
        <div className='tc'>
            <h1 className='f1' >
                {pageTitle} </h1>
            <SearchBox searchChange={searchHandler} />
            <Scroll>
                {pendingRequest ?
                    <h1> Loading </h1> :
                    <ErrorBoundry >
                        <CardsList cardsInformation={cardsInformation} 
                        CardComponent={CardComponent} />
                    </ErrorBoundry>}
            </Scroll>
        </div>
    )
}
export default CardsPageView