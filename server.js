const express = require('express');
const logger = require('morgan')
// * dotenv
require('dotenv').config()

var PORT = process.env.PORT

const app = express();
// *Using morgan for logging
app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// * Make 'public' a static folder
app.use(express.static("public"));

// Start the server
app.listen(PORT, function () {
    console.log(`Listening on PORT: ${PORT}`);
});
