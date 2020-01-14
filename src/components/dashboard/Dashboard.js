import React, { Fragment } from 'react';
import './dashboard.scss';


function Dashboard(props) {
    return (
        <Fragment>
            <div className="full-width">
                <div className="container menu-container">
                <div className="menu-item">
                    <span>ICON</span>
                    <p>Dashboard</p>
                </div>
                <div>
                    <span>ICON</span>
                    <p>Accounts</p>
                </div>
                <div>
                    <span>ICON</span>
                    <p>Create Account</p>
                </div>
                <div>
                    <span>ICON</span>
                    <p>Dashboard</p>
                </div>
                <div>
                    <span>ICON</span>
                    <p>Dashboard</p>
                </div>

                </div>
            </div>
            <div className="container mt-4">

                <h2 className="mb-4 ml-3">Welcome $User</h2>
                <div className="dashboard-contents">
                    <div className="side-bar bg-white">
                        <div className="profile-img-container mt-3">
                            <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="profile pic" />
                        </div>
                        <h3>Samuel Ocran</h3>
                        <div className="info">
                            <p className="email">Email: sammiestt@gmail.com</p>
                            <p className="date-joined">Member Since: 3rd January 2020</p>
                        </div>
                    
                        <h3>Accounts Created: 2</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at ipsum sem. Sed rutrum consectetur nisl ac tincidunt.
                    </div>
                    <div className="main-content bg-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at ipsum sem. Sed rutrum consectetur nisl ac tincidunt.
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default Dashboard

