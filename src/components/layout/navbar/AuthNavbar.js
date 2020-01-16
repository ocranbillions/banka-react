import React  from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss'

const Navbar = () => {

    return (
        <nav className="auth-nav-color">
            <div className="navigation container">
                <Link className="brand-logo" to="/">BANKA!</Link>
                <div className="nav-links-container">
                    <Link className="nav-link email" to="/dashboard">sammiestt@gmail.com</Link>
                    <Link className="nav-link" to="/">Logout</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;