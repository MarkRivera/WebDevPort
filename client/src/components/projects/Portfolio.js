import React, { useState } from "react";
import "./Portfolio.css";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import ravenous from "../../images/Ravenous.png";
import messageMe from "../../images/MessageMe.png";
import Netbuilders from "../../images/Netbuilders.png";
import Watchthis from "../../images/Watchthis.png";

const Portfolio = props => {
	const [projects, setProjects] = useState([
		{
			title: "Watch This",
			image: Watchthis,
			desc:
				"An app that decides which movie you should watch when you can't decide.",
			liveLink: "https://peaceful-scrubland-82341.herokuapp.com/",
			gitLink: "https://github.com/MarkRivera/WatchThis",
			icons: [
				"fab fa-html5 fa-2x html",
				"fab fa-css3-alt fa-2x css",
				"fab fa-js fa-2x js",
				"fab fa-react fa-2x react",
				"fab fa-node fa-2x node"
			]
		},

		{
			title: "NetBuilders",
			image: Netbuilders,
			desc:
				"A social media like web app that allows you to sign up and share amongst other developers",
			liveLink: "https://safe-brushlands-22158.herokuapp.com/",
			gitLink: "https://github.com/MarkRivera/NetBuilders",
			icons: [
				"fab fa-html5 fa-2x html",
				"fab fa-css3-alt fa-2x css",
				"fab fa-js fa-2x js",
				"fab fa-react fa-2x react",
				"fab fa-node fa-2x node"
			]
		},

		{
			title: "Ravenous",
			image: ravenous,
			desc:
				"When you're hungry, this app makes it easy to find the food you really want to eat.",
			liveLink: "https://peaceful-journey-11506.herokuapp.com/",
			gitLink: "https://github.com/MarkRivera/ravenous",
			icons: [
				"fab fa-html5 fa-2x html",
				"fab fa-css3-alt fa-2x css",
				"fab fa-js fa-2x js",
				"fab fa-react fa-2x react"
			]
		},

		{
			title: "Message-Me",
			image: messageMe,
			desc:
				"A message app I developed to show the power and efficiency of React and Redux.",
			liveLink: "https://enigmatic-plains-76907.herokuapp.com/",
			gitLink: "https://github.com/MarkRivera/msg2",
			icons: [
				"fab fa-html5 fa-2x html",
				"fab fa-css3-alt fa-2x css",
				"fab fa-js fa-2x js",
				"fab fa-react fa-2x react",
				"fab fa-node fa-2x node"
			]
		}
	]);

	return (
		<section className="portfolio" id="portfolio-start">
			<header className="intro">
				<h2 className="port-title">Introduction</h2>
				<p className="port-desc">
					{" "}
					Passionate technologist and a web developer. I love connecting people
					together and I’m always seeking opportunities to be creative
					implementing the latest technologies.{" "}
				</p>
			</header>

			<section className="projects">
				{projects.map((project, index) => {
					return (
						<article className="card portfolio-card" key={index}>
							<h4 className="card-title">{project.title}</h4>
							<img
								src={project.image}
								alt={`for ${project.title} project`}
								className="site-image"
							/>
							<p className="card-desc">{project.desc}</p>
							<div className="tech-icons">
								{project.icons.map((icon, index) => (
									<i className={icon} key={index}></i>
								))}
							</div>

							<div className="card-links">
								<a
									className="link"
									href={project.liveLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									Live
								</a>

								<a
									href={project.gitLink}
									className="link"
									target="_blank"
									rel="noopener noreferrer"
								>
									Code
								</a>
							</div>
						</article>
					);
				})}
			</section>
		</section>
	);
};

export default Portfolio;
