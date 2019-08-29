const dot = require("dotenv").config();
const path = require("path");
const express = require("express");
const helmet = require('helmet');
const app = express();

const port = process.env.PORT || 80;

console.log(path.join(__dirname, "build"));
app.use(helmet());
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "build")));
app.get("*", function(req, res) {
	res.sendFile(__dirname + "/build/index.html");
});
app.use("/api/resume", require("./routes/resume"));
app.use("/api/contact", require("./routes/contact"));
app.use(function(req, res, next) {
	res.status(404).send("File not found");
});

app.listen(port, () => console.log(`App listening on ${port}`));
