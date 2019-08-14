const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/download", (req, res) => {
	if (req.query.type === "docx") {
		res.set(
			"Content-Type",
			"application/vnd.openxmlformats-officedocument.wordprocessingml.document"
		);
		res.download(path.join(__dirname, "..", "files", "MR.docx"), err => {
			err && console.log(err, res.headersSent);
		});
	} else if (req.query.type === "pdf") {
		res.set("Content-Type", "application/pdf");
		res.download(path.join(__dirname, "..", "files", "MR.pdf"), err => {
			err && console.log(err, res.headersSent);
		});
	}
});

module.exports = router;
