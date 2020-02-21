import React  from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../redux/actions/auth.action';
import './navbar.scss'

const AuthNav = ({ logout, user: { email } }) => {

    return (
        <nav className="auth-nav-color">
            <div className="navigation container">
                <Link className="brand-logo" to="/">BANKA!</Link>
                <div className="nav-links-container">
                    <Link className="nav-link email" to="/dashboard">{email}</Link>
                    <Link className="nav-link" to="/signin" onClick={logout}>Logout</Link>
                </div>
            </div>
        </nav>
    );
};


AuthNav.propTypes = {
    logout: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
};
  
export default connect(null, { logout })(AuthNav);