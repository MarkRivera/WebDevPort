import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = props => {
	return (
		<nav>
			<ul>
				<Link to="/" className="nav-link">
					Home
				</Link>
				<Link to="/resume" className="nav-link">
					Resume
				</Link>
				<Link to="/contact" className="nav-link">
					Contact
				</Link>
			</ul>
		</nav>
	);
};

Navbar.propTypes = {};

export default Navbar;
