import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../layout/navbar/Navbar';
import Alert from '../layout/alert/Alert';
import { register } from '../../redux/actions/auth.action';
import './auth.scss';

const Register = ({ register, loading, isAuthenticated }) => {
    const [formData, setFormDAta] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const { firstName, lastName, email, password } = formData;

    const onChange = event => {
        setFormDAta({...formData, [event.target.name]: event.target.value });
    }

    const onSubmit = event => {
        event.preventDefault();
        register(formData);
    }

    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }

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
                                <form onSubmit={e => onSubmit(e)}>
                                    <div className="auth-input-group-container">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">@</span>
                                            </div>
                                            <input className="form-control" type="text" placeholder="First Name..." name="firstName" value={firstName} onChange={e => onChange(e)}/>
                                        </div>
                                    </div>
                                    <div className="auth-input-group-container">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">@</span>
                                            </div>
                                            <input className="form-control" type="text" placeholder="Last Name..." name="lastName" value={lastName} onChange={e => onChange(e)}/>
                                        </div>
                                    </div>
                                    <div className="auth-input-group-container">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">@</span>
                                            </div>
                                            <input className="form-control" type="email" placeholder="Email" name="email" value={email} onChange={e => onChange(e)}/>
                                        </div>
                                    </div>
                                    <div className="auth-input-group-container">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">@</span>
                                            </div>
                                            <input className="form-control" type="password" placeholder="Password" name="password" value={password} onChange={e => onChange(e)}/>
                                        </div>
                                    </div>
                                    <p className="hav-acct">Already have an account? <Link to="/signin">Sign-In</Link></p>
                                    <div className="btn-container">
                                       <input className="btn btn-primary auth-btn" type="submit" value={loading ? " PLEASE WAIT " : "GET STARTED"}></input>
                                    </div>
                                    <Alert />
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </Fragment>
    )
}

Register.propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
};
  
const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    loading: state.authReducer.loading,
});

export default connect(mapStateToProps, { register })(Register);