import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar =() => {
    return (
        <>
            <div className="menu_style">
            <NavLink exact activeClassName="active_class" to='/' >About Me</NavLink>
            
            <NavLink exact activeClassName="active_class" to='/portfolio'>Portfolio </NavLink>

            <NavLink exact activeClassName="active_class" to='/contact'>Contact </NavLink>
            </div>
            
        </>
    );
};

export default Navbar;
