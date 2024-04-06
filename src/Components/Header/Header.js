import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
        <div className='header'>
            <NavLink className={({isActive})=> isActive?'active':undefined} to={'/Home'}>Home</NavLink>
            <NavLink to={'/About'}>About</NavLink>
            <NavLink to={'/Users'}>User</NavLink>
            <NavLink to={'/Products'}>Products</NavLink>
        </div>
    );
};

export default Header;