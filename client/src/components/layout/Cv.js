import React from "react";
import Resume from "../../images/MR.png";
import "./Cv.css";

const Cv = () => {
	return (
		<section className="resume-container">
			<h3 className="resume-title">Resume</h3>

			<img src={Resume} alt="of MarkRivera's Resume" className="resume" />
		</section>
	);
};

export default Cv;
