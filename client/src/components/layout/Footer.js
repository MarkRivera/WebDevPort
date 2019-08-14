import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = props => {
	return (
		<section className="footer">
			<div className="social-links">
				<a href="https://www.linkedin.com/in/Mrivera1991/" className="social">
					<i className="fab fa-linkedin fa-2x"></i>
				</a>

				<a href="https://github.com/MarkRivera" className="social">
					<i className="fab fa-github fa-2x"></i>
				</a>

				<Link to="/contact" className="social">
					<i className="fas fa-envelope fa-2x"></i>
				</Link>
			</div>
		</section>
	);
};

export default Footer;
