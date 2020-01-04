import React from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../../navbar/Navbar'
import './landing.scss';

const Landing = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Redirect to='/dashboard' />;
	}

	return (
		<section className='landing'>
			<Navbar />
			<div className="pt-10 container">
				<h1>Landing page Contents</h1>
			</div>
		</section>
	);
};

export default Landing;