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
			<section className="container hero-container">
				<h1 className="header">A bank for good</h1>
				<p>Join an ethical bank that exits to lend to <br/>charities and social enterprises</p>
				<div>
					<button class="btn btn-primary-outline" type="button">LOGIN</button>
					<button class="btn btn-primary" type="button">START HERE</button>
				</div>
			</section>
		</section>
	);
};

export default Landing;