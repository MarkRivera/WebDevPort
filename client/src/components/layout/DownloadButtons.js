import React from "react";
import "./DownloadButtons.css";

const DownloadButtons = () => {
	const onClick = (e, type) => {
		fetch(`/api/resume/download?type=${type}`)
			.then(res => {
				return res.blob();
			})
			.then(blob => {
				let a = document.createElement("a");
				document.body.appendChild(a);
				a.style = "display: none";

				let url = URL.createObjectURL(blob);
				a.href = url;
				a.download = `MR.${type.toLowerCase()}`;
				a.click();
				window.URL.revokeObjectURL(url);
				document.body.removeChild(a);
			});
	};

	return (
		<section className="downloads">
			<h3 className="download-title">Downloads</h3>

			<div className="buttons">
				<button className="btn resume-btn" onClick={e => onClick(e, "docx")}>
					<i className="fas fa-download"></i> Word
				</button>
				<button className="btn resume-btn" onClick={e => onClick(e, "pdf")}>
					<i className="fas fa-download"></i> PDF
				</button>
			</div>
			<hr />
		</section>
	);
};

export default DownloadButtons;
