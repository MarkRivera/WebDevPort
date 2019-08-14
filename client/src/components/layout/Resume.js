import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import DownloadButtons from "./DownloadButtons";
import Cv from "./Cv";
import codeJPG from "../../images/code.jpg";

const Resume = props => {
	return (
		<Fragment>
			<Header page="Resume" propClass="resume-image-wrapper" />
			<DownloadButtons />
			<Cv />
		</Fragment>
	);
};

Resume.propTypes = {};

export default Resume;
