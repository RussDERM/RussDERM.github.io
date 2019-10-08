const express = require("express");
const logger = require("morgan");
const path = require("path");
// * dotenv
require("dotenv").config();
// *Githil Pages Deploy
var ghpages = require("gh-pages");
ghpages.publish("RED-Portfolio-Page", { add: true }, function(err) {});

var PORT = process.env.PORT;

const app = express();
// *Using morgan for logging
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// * Make 'public' a static folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// Start the server
app.listen(PORT, function() {
  console.log(`Listening on PORT: ${PORT}`);
});
