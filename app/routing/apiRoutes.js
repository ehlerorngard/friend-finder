var express = require("express");
var friends = require("../data/friends");

var router = express.Router();


router.get("/friends", function(req, res) {
    res.json(friends);

    // for (var i = 0; i < friends.allFriends.length; i++) {
    // }
});

// create new user profile and match with compatible friend
router.post("/friends", function(req, res) {

// run compatibility algorithm
	console.log(req.body);
	var newFriend = req.body;

	console.log("Here are the scores: " + newFriend.userResponses.scores);
	console.log(newFriend);
	
	// friends.push(newFriend);
	var compatiPal = { name: "Harry", photo: "http://www.animalspot.net/wp-content/uploads/2015/05/Pronghorn-Antelope.jpg" };
	res.send(compatiPal);
	// res.json(compatiPal);
});


module.exports = router;

