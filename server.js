const path = require("path");
const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static("client/build"));
// app.use("/", require("./routes/main"));
app.use("/api/resume", require("./routes/resume"));
app.use("/api/contact", require("./routes/contact"));

app.listen(port, () => console.log(`App listening on ${port}`));
