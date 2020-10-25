import React from 'react'
import { Link } from 'react-router-dom';

const NavLinks = ({ link, name }) => {
    return (
        <Link to={link} >
            <text style={{ whiteSpace: 'nowrap' }}
                className='f4 link dim black underline pa3 pv1 pointer'>{name}
            </text>
        </Link>
    )
}

export default NavLinks
