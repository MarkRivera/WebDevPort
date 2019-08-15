const express = require("express");
const router = express.Router();
var nodemailer = require("nodemailer");
const creds = require("../config/production");
const { check, validationResult } = require("express-validator");

const transport = {
	host: "smtp.gmail.com",
	auth: {
		user: process.env.EUSER,
		pass: process.env.EPW
	}
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		console.log("Server is ready to take messages");
	}
});

router.post(
	"/email",
	[check("email", "Please enter a valid email!").isEmail()],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}

		var mail = {
			from: req.body.email,
			to: "Mrivera1991@gmail.com", //Change to email address that you want to receive messages on
			subject: `New Message from ${req.body.email}`,
			text: req.body.message
		};

		transporter.sendMail(mail, (err, data) => {
			if (err) {
				res.json({
					msg: "fail"
				});
			} else {
				res.json({
					msg: "success"
				});
			}
		});
	}
);

module.exports = router;
