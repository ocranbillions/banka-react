import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar/Navbar';
import './register.scss';

function Register() {
    return (
        <Fragment>
            <section className='full-img-bg'>
                <Navbar />
                <section className="container">
                    <div className="auth-box">
                        <h1 className="auth-box__title">Register</h1>
                        <div className="auth-boxes-parent">
                            <div className="auth-box-left">
                                <div className="description">
                                    <h4 className="info-title">Marketing</h4>
                                    <p className="description">
                                        We've created the marketing campaign of the website. It was a very interesting collaboration.
                                    </p>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Marketing</h4>
                                    <p className="description">
                                        We've created the marketing campaign of the website. It was a very interesting collaboration.
                                    </p>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Marketing</h4>
                                    <p className="description">
                                        We've created the marketing campaign of the website. It was a very interesting collaboration.
                                    </p>
                                </div>
                            </div>
                            <div className="auth-box-right">
                                <ul className="auth-social">
                                    <li><Link to="#" class="fa fa-twitter"></Link></li>
                                    <li><Link to="#" class="fa fa-facebook"></Link></li>
                                    <li><Link to="#" class="fa fa-instagram"></Link></li>
                                </ul>
                                <p className="auth-classical-text">or be classical</p>
                                <form>
                                    <div className="auth-input-group-container">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">@</span>
                                            </div>
                                            <input className="form-control" type="text" placeholder="First Name..." />
                                        </div>
                                    </div>
                                    <div className="auth-input-group-container">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">@</span>
                                            </div>
                                            <input className="form-control" type="text" placeholder="Last Name..." />
                                        </div>
                                    </div>
                                    <div className="auth-input-group-container">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">@</span>
                                            </div>
                                            <input className="form-control" type="text" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="auth-input-group-container">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">@</span>
                                            </div>
                                            <input className="form-control" type="text" placeholder="Password" />
                                        </div>
                                    </div>
                                    <p className="hav-acct">Already have an account? <Link to="/signin">Sign-In</Link></p>
                                    <div className="btn-container">
                                        <Link to="$"><button class="btn btn-primary auth-btn" type="button">GET STARTED</button></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </Fragment>
    )
}

export default Register;