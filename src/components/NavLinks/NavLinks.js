import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item nav-link"><NavLink to="/chatwindow"> Chat Window</NavLink></li>
            <li className="nav-item nav-link"><NavLink to="/privatechat"> Private Chat</NavLink></li>
        </ul>
    );
};

export default NavLinks;