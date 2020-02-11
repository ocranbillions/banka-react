import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AuthNavbar from '../layout/navbar/AuthNavbar'
import './dashboard.scss';


function Dashboard(props) {
    return (
        <Fragment>
            <div className="full-width">
                <AuthNavbar />
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

                <h2 className="mb-4 ml-3">Welcome, Samuel</h2>
                <div className="dashboard-contents">
                    <div className="side-bar bg-white">
                        <div className="profile-img-container mt-3">
                            <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="profile pic" />
                        </div>
                        <h3>Samuel Ocran</h3>
                        <div className="basicinfo">
                            <p className="email">Email: sammiestt@gmail.com</p>
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
                        {/* <div className="no-account-box">
                            <p className="message">You currently do not have any accounts but hey! No worries, you can create one below.</p>
                            <div className="open-account">
                                <button className="btn btn-primary btn-lg" type="button">
                                    <i className="icon ion-md-create mr-2"></i> Open New Accont
                                </button>
                            </div>
                        </div> */}

                        <div className="accounts-section">
                            {/* <button className="new-acc-btn">
                                + New Account
                            </button> */}

                            <div className="accounts">
                                <div className="account-card">
                                    <p>Type: Savings</p>
                                    <p>Status: active</p>
                                    <p>Balance: N24,444.00</p>
                                </div>
                                <div className="account-card">
                                    <p>Type: Savings</p>
                                    <p>Status: active</p>
                                    <p>Balance: N24,444.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default Dashboard

