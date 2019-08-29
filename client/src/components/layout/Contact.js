import React, { Fragment, useState } from "react";
import "./Contact.css";
import Header from "./Header";

const Spinner = props => {
	return (
		<div class="lds-ring">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

const Contact = props => {
	const [formData, setFormData] = useState({
		email: "",
		message: "",
		honeyName: "",
		honeyEmail: ""
	});

	const [awaitingResponse, setResponse] = useState(false);

	const { email, message, honeyEmail, honeyName } = formData;

	const onChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const onFocus = e => {
		const inputSiblingStyle = e.nativeEvent.target.nextSibling.style;
		inputSiblingStyle.top = "40%";
		inputSiblingStyle.transform = "translateY(-100%)";
		inputSiblingStyle.fontSize = "11px";
	};

	const onBlur = e => {
		const inputSiblingStyle = e.nativeEvent.target.nextSibling.style;

		if (formData[e.target.name].length <= 0) {
			inputSiblingStyle.top = "50%";
			inputSiblingStyle.transform = "translateY(-50%)";
			inputSiblingStyle.fontSize = "14px";
		}
	};

	const onSubmit = async e => {
		e.preventDefault();
		const data = formData;

		if( data.honeyName.length > 0 || data.honeyEmail.length > 0) {
			return
		} else {
			fetch("/api/contact/email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			})
			.then(res => res.json())
			.then(res => {
				if (res.errors) {
					const error = res.errors[0].msg;
					const property = res.errors[0].param;
					errorHandler(error, property);
				} else {
					setFormData({
						...formData,
						email: "",
						message: ""
					});
				}
			});
		}
	};

	const errorHandler = (error, property) => {
		setFormData({
			...formData,
			[property]: error
		});

		const element = document.querySelector(`#${property}`);

		element.classList.add("danger");
		element.nextSibling.classList.add("danger-label");

		setTimeout(() => {
			element.classList.remove("danger");
			element.nextSibling.classList.remove("danger-label");
		}, 2000);
	};

	return (
		<Fragment>
			<Header page="Contact" propClass="contact-image-wrapper" />
			<section className="contact-form">
				<h3 className="form-title">Contact Me</h3>
				<form className="auth-form" onSubmit={e => onSubmit(e)}>
					<div className="form-group">
						<input
							type="email"
							className="form-control"
							id="email"
							aria-describedby="email"
							name="email"
							value={email}
							onChange={e => onChange(e)}
							onFocus={e => onFocus(e)}
							onBlur={e => onBlur(e)}
						/>
						<label htmlFor="email" className="input-label">
							Email
						</label>
					</div>

					<div className="form-group">
						<textarea
							type="text"
							className="text-area"
							id="message"
							aria-describedby="message"
							name="message"
							value={message}
							onChange={e => onChange(e)}
							rows="8"
							placeholder="Message here..."
						></textarea>
					</div>

					{/* Honey Pot Forms */}

					<label className="ohnohoney" htmlFor="name"></label>
					<input
						className="ohnohoney"
						autoComplete="off"
						type="text" id="name"
						name="name"
						placeholder="Your name here"
						onChange={e => onChange(e)}
						value={honeyName}
					/>

					<label className="ohnohoney" htmlFor="email"></label>
					<input
						className="ohnohoney"
						autoComplete="off"
						type="email"
						id="email"
						name="email"
						placeholder="Your e-mail here"
						onChange={e => onChange(e)}
						value={honeyEmail}
					/>

					<button type="submit" className="btn form-btn">
						{awaitingResponse ? <Spinner /> : "Submit"}
					</button>
				</form>
			</section>
		</Fragment>
	);
};

export default Contact;
