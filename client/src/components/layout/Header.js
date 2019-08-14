import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ page, propClass }) => {
	return (
		<Fragment>
			<header className="hero-heading">
				<div className={`image-wrapper ${propClass}`}></div>
				<div className="text-wrapper">
					<h1>{page}</h1>
				</div>
			</header>
		</Fragment>
	);
};

Header.propTypes = {};

export default Header;
