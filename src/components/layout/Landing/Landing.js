import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../../navbar/Navbar'
import './landing.scss';

const Landing = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Redirect to='/dashboard' />;
	}

	return (
		<Fragment>
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
			<section className="section2-container">
				<div className="container">
					<h2>The Proof is in the Pudding!</h2>
					<div className="section2">
						<div>
							<h2>23000</h2>
							<p>---</p>
							<p>HAPPY CLIENTS</p>
						</div>
						<div>
							<h2>934</h2>
							<p>---</p>
							<p>BRANCHES AROUND THE WORLD</p>
						</div>
						<div>
							<h2>1.4</h2>
							<p>---</p>
							<p>BILLION DOLLARS MANAGED</p>
						</div>
						<div>
							<h2>60000</h2>
							<p>---</p>
							<p>CUPS OF COFFEE</p>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Landing;