import React from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase-utils';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { setUser } from '../../redux/user/user-slice'
import NavLinks from '../../components/NavLink';
import NavigationStatus from '../../navigation/NavigationStatus'

const CurrentUser = () => {

    const dispatch = useDispatch();
    const history = useHistory()
    const currentUser = useSelector(state => state.currentUser)

    let unsubscribeFromAuth = null

    useEffect(() => {
        unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)
                userRef.onSnapshot(snapShot => {
                    dispatch(setUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    }))
                })
                history.push('/user')
            }
            else {
                setUser(userAuth)
            }
        })
        return () => {
            unsubscribeFromAuth = null
        }
    }, [])

    return (
        <div>
            {currentUser.name ?
                <div className='flex'>
                    <NavigationStatus />
                </div> :
                <div className='flex'>
                    <NavLinks link='/sign-in' name='Sign In' id='sign-in' />
                </div>}
        </div>
    )
}

export default CurrentUser
