import React  from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-transparent">
            <div className="container">
                <Link className="navbar-brand" href="#">BANKA!</Link>
                <button className="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false">
                    <span className="navbar-toggler-icon bg-white"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Person</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link register-btn" href="#">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;