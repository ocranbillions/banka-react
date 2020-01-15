import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar/Navbar';
import './auth.scss';

function SignIn() {
    return (
        <Fragment>
            <section className='full-img-bg'>
                <Navbar />
                <section className="container">
                    <div className="auth-box">
                        <h1 className="auth-box__title">Sign-In</h1>
                        <div className="auth-boxes-parent">
                            <div className="auth-box-left">
                            <div className="description">
                                    <h4 className="info-title">Lorem Ipsum</h4>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at ipsum sem. Sed rutrum consectetur nisl ac tincidunt.
                                    </p>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Lorem Ipsum</h4>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at ipsum sem. Sed rutrum consectetur nisl ac tincidunt.
                                    </p>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Lorem Ipsum</h4>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at ipsum sem. Sed rutrum consectetur nisl ac tincidunt.
                                    </p>
                                </div>
                            </div>
                            <div className="auth-box-right">
                                <ul className="auth-social">
                                    <li><Link to="#" className="fa fa-google"></Link></li>
                                    <li><Link to="#" className="fa fa-facebook"></Link></li>
                                    <li><Link to="#" className="fa fa-twitter"></Link></li>
                                </ul>
                                <p className="auth-classical-text">or be classical</p>
                                <form>
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
                                    <p className="hav-acct">Don't have an account? <Link to="/register">Register</Link></p>
                                    <div className="btn-container">
                                        {/* <input className="btn btn-primary auth-btn" type="submit" value="SIGN IN"/> */}
                                        <Link to="/dashboard"><button class="btn btn-primary auth-btn" type="button">SIGN IN</button></Link>
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

export default SignIn;