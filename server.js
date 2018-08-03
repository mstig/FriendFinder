//Dependencies
const express = require("express");
const bodyParser = require("body-parser");

//Declaring express server
const app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//api & page information from routing folder
require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes")(app);

//starting server
app.listen(PORT, function () {
    console.log("Server listening on port: " + PORT);
})