const express = require("express");
const router = express.Router();

router.get("/contact", (req, res) => {
	res.send("contact me!");
});

module.exports = router;
