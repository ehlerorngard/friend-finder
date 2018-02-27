var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var routes = require("./app/routing/apiRoutes");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", routes);






app.listen(3004);