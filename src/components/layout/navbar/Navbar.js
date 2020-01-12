import React  from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/">BANKA!</Link>
                <button className="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false">
                    <span className="navbar-toggler-icon bg-white"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Person</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signin">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link register-btn" to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;