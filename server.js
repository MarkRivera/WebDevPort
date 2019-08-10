const path = require("path");
const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static("client/build"));
app.use("/", require("./routes/main"));

app.listen(port, () => console.log(`App listening on ${port}`));
