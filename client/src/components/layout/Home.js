import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./Home.css";
import Portfolio from "../projects/Portfolio";

const Home = props => {
	const onClick = e => {
		window.scrollTo({
			top: document.querySelector(".portfolio").getBoundingClientRect().top,
			behavior: "smooth"
		});
	};

	return (
		<Fragment>
			<div className="banner">
				<section className="header-card">
					<h2 className="header-title">Mark Rivera</h2>
					<h4 className="header-position">Web Developer</h4>
					<button className="btn header-btn" onClick={e => onClick(e)}>
						Portfolio
					</button>
				</section>
			</div>

			<Portfolio />
		</Fragment>
	);
};

Home.propTypes = {};

export default Home;
