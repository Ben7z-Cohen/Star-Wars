import React from 'react'
import { auth } from '../firebase/firebase-utils'
import NavLink from './NavLink';
import { useLocation } from 'react-router-dom'


//Todo: change the name of the component.
const ConnectedComponent = () => {
    const location = useLocation()

    const handleSignOut = () => {
        auth.signOut()
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

export default ConnectedComponent
