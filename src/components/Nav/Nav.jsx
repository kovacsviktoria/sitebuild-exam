import './Nav.css';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

const Nav = () => {
    return (
        <div className="nav-container">
            <h1>Media Appereances</h1>
            <div className="hamburger-container">
                <MenuIcon className="hamburger"/>
            </div>
        </div>
    )
}

export default Nav;
