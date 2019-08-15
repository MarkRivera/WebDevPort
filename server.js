const dot = require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

console.log(path.join(__dirname, "build"));
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
