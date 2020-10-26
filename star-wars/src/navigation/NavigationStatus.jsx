import React from 'react'
import { auth } from '../firebase/firebase-utils'
import NavLink from '../components/NavLink';
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signOutAndClearSession } from '../redux/user/user-thunk'

const NavigationStatus = () => {

    const location = useLocation()
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(signOutAndClearSession(auth))
    }

    return (

        <div className='flex'>
            { location.pathname.endsWith('suggested') ?
                <NavLink link={'/user'} name={'Star Wars Characters'} />
                :
                <NavLink link={'/user/suggested'} name={'Suggested Movies'} />
            }
            <div onClick={() => handleSignOut()}>
                <NavLink link={'/'} name={"Sign Out"} />
            </div>
        </div>
    )
}

export default NavigationStatus
