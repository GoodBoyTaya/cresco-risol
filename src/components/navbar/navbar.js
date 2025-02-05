// Navbar.js
import React from 'react';
import './Navbar.css';
import {NavLink} from "react-router-dom"; // Import your CSS file

const Navbar = () => {
    return (
        <div className="container-fluid">
            <nav className="navbar justify-content-center fixed-top navbar-expand-lg navbar-light">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({isActive}) => (isActive ? 'selected' : '')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/our-story"
                            className={({isActive}) => (isActive ? 'selected' : '')}
                        >
                            Our Story
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products"
                            className={({isActive}) => (isActive ? 'selected' : '')}
                        >
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/whats-next"
                            className={({isActive}) => (isActive ? 'selected' : '')}
                        >
                            What's Next
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};


export default Navbar;