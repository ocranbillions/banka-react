import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AuthNavbar from '../layout/navbar/AuthNavbar';
import Account from './Account';
import './dashboard.scss';


const Dashboard = ({ user, fetching_accounts, accounts }) => {

    return (
        <Fragment>
            <div className="full-width">
                <AuthNavbar user={user}/>
                <div className="container menu-container mt-2 mb-2">
                    <Link to="/dashboard" className="menu-item active-menu">
                        <i className="icon ion-md-card"></i>
                        <p className="item">Dashboard</p>
                    </Link>
                    <Link to="#" className="menu-item">
                        <i className="icon ion-md-person"></i>
                        <p className="item">Accounts</p>
                    </Link>
                    <Link to="#" className="menu-item">
                        <i className="icon ion-md-camera"></i>
                        <p className="item">Upload Image</p>
                    </Link>
                    <Link to="#" className="menu-item">
                        <i className="icon ion-md-settings"></i>
                        <p className="item">Password Reset</p>
                    </Link>
                </div>
            </div>
            <div className="container mt-4">

                <h2 className="mb-4 ml-3">Welcome, {user.firstName}</h2>
                <div className="dashboard-contents">
                    <div className="side-bar bg-white">
                        <div className="profile-img-container mt-3">
                            <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="profile pic" />
                        </div>
                        <h3>{`${user.firstName} ${user.lastName}`}</h3>
                        <div className="basicinfo">
                            <p className="email">Email: {user.email}</p>
                            <p className="date-joined">Date Joined: 3rd January 2020</p>
                        </div>
                        
                        <div className="detailed-info">
                            <h3 className="mt-5">Profile Info</h3>
                            <p>Accounts Owned: 2</p>
                            <p>Last Login: 12/23/2020</p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at ipsum sem. Sed rutrum consectetur nisl ac tincidunt.   
                        </div>
                    </div>
                    <div className="main-content bg-white">

                        <div className="accounts-section">
                            {/* <button className="new-acc-btn">
                                + New Account
                            </button> */}

                            <div className="accounts">
                                {
                                    fetching_accounts ? <div>Fetching accounts...</div> :

                                    (accounts.length > 0) ? accounts.map(account => (<Account key={account.id} account={account} />))
                                    :   
                                    <div className="no-account-box">
                                        <p className="message">You currently do not have any account.</p>
                                        <div className="open-account">
                                            <button className="btn btn-primary btn-lg" type="button">
                                                <i className="icon ion-md-create mr-2"></i> New Account
                                            </button>
                                        </div>
                                    </div> 
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

Dashboard.propTypes = {
    user: PropTypes.object.isRequired,
    accounts: PropTypes.array.isRequired,
    fetching_accounts: PropTypes.bool.isRequired,
};
  
const mapStateToProps = state => ({
    user: state.authReducer.user,
    accounts: state.accountReducer.accounts,
    fetching_accounts: state.accountReducer.fetching_accounts,
});

export default connect(mapStateToProps, null )(Dashboard);

