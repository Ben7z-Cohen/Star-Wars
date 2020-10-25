import React from 'react';
import CurrentUser from '../CurrentUser/CurrentUser';
import NavLinks from '../../components/NavLink';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Navigation = () => {
    {
        return (
            <AppBar position="static" color='transparent'>
                <Toolbar>
                    <NavLinks link='/' name='Home' id='home' />
                    <NavLinks link='/contact' name='Contact' id='contact' />
                    <NavLinks link='/about' name='About' id='contact' />
                    <div style={{ flexGrow: 1 }} />
                    <CurrentUser />
                </Toolbar>
            </AppBar>
        );
    }

}

export default Navigation;