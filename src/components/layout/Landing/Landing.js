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
			{/* <section className='landing'> */}
			<section className='full-img-bg'>
				<Navbar />
				<section className="container hero-container">
					<div className="header-container">
						<h1 className="header">Fresh paint and bright smiles make it home. We make it  happen.</h1>
						<p>Whether you’re a first-time home buyer or an empty nester, our team of home loan experts work hard to get you home fast.</p>
						<div>
							<Link to="/register"><button className="btn btn-primary mt-5" type="button">START HERE</button></Link>
						</div>
					</div>
				</section>
			</section>
			<section className="section2-container">
				<div className="container">
					<div className="text-center mb-5">
						<h2 className="font-weight-bold">Suggested Services</h2>
						<p>See our to pick of services for you</p>
					</div>

					<div className="section2">
						<div className="box">
							<Link to="#">
								<div className="icon-wrapper">
									<img src="./resources/img/home-icon.svg" alt="Home Icon"/>
								</div>
								<h3 className="fontMedium">Apply for a Loan</h3>
							</Link>
						</div>
						<div className="box">
							<Link to="#">
								<div className="icon-wrapper">
									<img src="./resources/img/member-icon.svg" alt="Home Icon"/>
								</div>
								<h3 className="fontMedium">Become a Member</h3>
							</Link>
						</div>
						<div className="box">
							<Link to="#">
								<div className="icon-wrapper">
									<img src="./resources/img/cc-icon.svg" alt="Home Icon"/>
								</div>
								<h3 className="fontMedium">Make a Payment</h3>
							</Link>
						</div>
						<div className="box">
							<Link to="#">
								<div className="icon-wrapper">
									<img src="./resources/img/onlineBanking-icon.svg" alt="Home Icon"/>
								</div>
								<h3 className="fontMedium">Online Banking</h3>
							</Link>
						</div>
						<div className="box">
							<Link to="#">
								<div className="icon-wrapper">
									<img src="./resources/img/phone-icon.svg" alt="Home Icon"/>
								</div>
								<h3 className="fontMedium">Contact Us</h3>
							</Link>
						</div>
						<div className="box">
							<Link to="#">
								<div className="icon-wrapper">
									<img src="./resources/img/team-icon.svg" alt="Home Icon"/>
								</div>
								<h3 className="fontMedium">Join The Team</h3>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="container sec-3-container">
				<div className="col-1-of-2">
					<img src="./resources/img/debitCard.jpg" alt="Debit card"/>
				</div>
				<div className="col-1-of-2">
					<div className="content">
						<span>The Banka! Difference</span>
						<h3 className="pt-5 pb-5">As a Solarian, you’ll benefit from these great features:</h3>
						<ul>
							<li>Easy online lending and membership applications</li>
							<li>Simple and secure online and mobile banking</li>
							<li>Access to over 23k ATMs nationwide</li>
							<li>Survey programs to ensure your voice is heard</li>
						</ul>
						<h4><Link to="#">See Other Features</Link></h4>
					</div>
				</div>
			</section>
			<section className="container section-4-container">
				<div className="section-4-box section-4-left">
					<img src="./resources/img/macbook-pic.jpg" alt="Pic"/>
					<h3 className="pt-5 pb-3">Questions?</h3>
					<p className="pb-3">Everything you need to know from mortgage loans to online banking. We’re here to help.</p>
					<h4><Link to="#">Frequently Asked Questions</Link></h4>
				</div>
				<div className="section-4-box section-4-right">
					<img src="./resources/img/cup-pic.jpg" alt="Pic"/>
					<h3 className="pt-5 pb-3">Stay Informed</h3>
					<p className="pb-3">For everything from home lending resources to what's happening around the Pacific Northwest.</p>
					<h4 className="mb-5"><Link to="#">Visit Our Blog </Link></h4>
				</div>
			</section>
			<footer>
				<section className="container footer-top-section">
					<div>
						<h5>Features</h5>
						<ul>
							<li>Signup</li>
							<li>Transfer and Payments</li>
							<li>Savings and Goals</li>
						</ul>
					</div>
					<div>
						<h5>Company</h5>
						<ul>
							<li>The Banka! Life</li>
							<li>FAQ</li>
							<li>Contact</li>
						</ul>
					</div>
					<div className="apps-container">
						<h5>Get BANKA!</h5>
						<ul>
							<li><img src="./resources/img/playstore.png" alt="Play store"/></li>
							<li><img src="./resources/img/applestore.svg" alt="Apple Store"/></li>
						</ul>
					</div>
					<div>
						<h5>Social Media</h5>
						<ul className="social-btn-container">
							<li><Link to="#" className="fa fa-twitter"></Link></li>
							<li><Link to="#" className="fa fa-facebook"></Link></li>
							<li><Link to="#" className="fa fa-instagram"></Link></li>
						</ul>
					</div>
				</section>
				<section className="container">
					<div className="footer-bottom-section">
						<p>Terms & Conditions  |  Privacy Policy</p>
						<p>© BANKA 2020</p>
					</div>
				</section>
			</footer>
		</Fragment>
	);
};

export default Landing;