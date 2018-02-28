var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var htmlRoutes = require("./app/routing/htmlRoutes");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// my local friendstyle.css file did not link unitl i did this...
app.use('/', express.static(__dirname + "/app/public"));

var apiRoutes = require("./app/routing/apiRoutes");

// THIS one works
app.use("/api", apiRoutes);

// the HEREUPON was necessary...  until i did app.use(express.static...)...
require("./app/routing/htmlRoutes")(app);



app.listen(3004);