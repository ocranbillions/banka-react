import React, { Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar'
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
					<div className="header-container">
						<h1 className="header">Fresh paint and bright smiles make it home. We make it  happen.</h1>
						<p>Whether you’re a first-time home buyer or an empty nester, our team of home loan experts work hard to get you home fast.</p>
						<div>
							<button class="btn btn-primary mt-5" type="button">START HERE</button>
						</div>
					</div>
				</section>
			</section>
			<section className="section2-container">
				<div className="container">
					<div className="section2">
						<div class="box">
							<Link to="#">
								<div class="icon-wrapper">
									<img src="./resources/img/home-icon.svg" alt="Home Icon"/>
								</div>
								<h3 class="fontMedium">Apply for a Home Loan</h3>
							</Link>
						</div>
						<div class="box">
							<Link to="#">
								<div class="icon-wrapper">
									<img src="./resources/img/member-icon.svg" alt="Home Icon"/>
								</div>
								<h3 class="fontMedium">Become a Member</h3>
							</Link>
						</div>
						<div class="box">
							<Link to="#">
								<div class="icon-wrapper">
									<img src="./resources/img/cc-icon.svg" alt="Home Icon"/>
								</div>
								<h3 class="fontMedium">Make a Payment</h3>
							</Link>
						</div>
						<div class="box">
							<Link to="#">
								<div class="icon-wrapper">
									<img src="./resources/img/onlineBanking-icon.svg" alt="Home Icon"/>
								</div>
								<h3 class="fontMedium">SignUp for Online Banking</h3>
							</Link>
						</div>
						<div class="box">
							<Link to="#">
								<div class="icon-wrapper">
									<img src="./resources/img/phone-icon.svg" alt="Home Icon"/>
								</div>
								<h3 class="fontMedium">Contact Us</h3>
							</Link>
						</div>
						<div class="box">
							<Link to="#">
								<div class="icon-wrapper">
									<img src="./resources/img/team-icon.svg" alt="Home Icon"/>
								</div>
								<h3 class="fontMedium">Join The Team</h3>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Landing;