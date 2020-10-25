import React from 'react'
import SignUpContainer from '../pages/SignUp/SignUpContainer'
import SignInContainer from '../pages/SignIn/SignInContainer'
import HomePageContainer from '../pages/HomePage/HomePageContainer';
import { Route, Switch } from 'react-router-dom';
import  CardsPage  from '../pages/CardsPage/CardsPage'

const MainRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePageContainer} />
                <Route exact path='/sign-in' component={SignInContainer} />
                <Route exact path='/sign-up' component={SignUpContainer} />
                <Route exact path='/user' component={CardsPage} />
                {/* <Route exact path='/star-wars' component={VideoContainer} /> */}
            </Switch>
        </div>
    )
}

export default MainRouter;