var path = require("path");

//===============================
//===============================
//===============================
// WHY DOESN'T THE BELOW WORK WHEN IT WORKED FINE FOR API ROUTES??

// var express = require("express");
// var router = express.Router();

// router.get("/", function(req, res) {
// 	console.log("\u001b[32mIt's working!");
// 	res.sendFile(path.join(__dirname, "../public/home.html"));
// });

// module.exports = router;
//===============================
//===============================
//===============================

module.exports = function(app) {
	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
	app.get("/survey.html", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	})
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
	app.get("*", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};