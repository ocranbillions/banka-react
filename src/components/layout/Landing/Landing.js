import React from 'react';
import { Link, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import './landing.scss';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      Landing page Contents
    </section>
  );
};

// Landing.propTypes = {
//   isAuthenticated: PropTypes.bool
// };

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

export default Landing