import React from 'react'
import SignUpPage from '../pages/SignUp/SignUpPage'
import SignInPage from '../pages/SignIn/SignInPage'
import HomePageContainer from '../pages/HomePage/HomePageContainer';
import { Route, Switch } from 'react-router-dom';
import CharactersPage from '../pages/CharactersPage/CharactersPage'
import MoviesPage from '../pages/MoviesPage/MoviesPage'

const MainRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePageContainer} />
                <Route exact path='/sign-in' component={SignInPage} />
                <Route exact path='/sign-up' component={SignUpPage} />
                <Route exact path='/user' component={CharactersPage} />
                <Route exact path='/user/suggested' component={MoviesPage} />
            </Switch>
        </div>
    )
}

export default MainRouter;