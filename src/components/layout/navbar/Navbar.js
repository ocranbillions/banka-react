import React  from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss'

const Navbar = () => {

    return (
        <nav>
            <div className="navigation container">
                <Link className="brand-logo" to="/">BANKA!</Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/signin">Login</Link>
                    <Link className="nav-link" to="/register">Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;