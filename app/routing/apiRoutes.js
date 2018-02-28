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
	var newFriend = req.body;

	console.log(newFriend);
	console.log(newFriend.scores);

	console.log("newFriend: ");
	console.log(newFriend);
	console.log("name: " + newFriend.name);
	console.log("photo: " + newFriend.photo);
	
	var newArray = [];
	var integers = function(scores){
		for (i = 0; i < scores.length; i++) {
			newArray.push(parseInt(scores[i]));
		}
	};
	integers(newFriend.scores);
	newFriend.scores = newArray;

	console.log(newFriend);
	
	var compatiPal;

//================================
//==== main matching algorithm ===
//================================
	function findMatch(){
		var matchesArray = [];
		var theWinner;
		var lowestAgg;
		for (i = 0; i < friends.length; i++){
			var possMatch = friends[i];
			var me = newFriend;
			var aggregate = 0;
			for (j = 0; j < newFriend.scores.length; j++) {
				var num = newFriend.scores[j];
				var ber = possMatch.scores[j];
				var difference = Math.abs(num - ber);
				aggregate += difference;
			}
			console.log(aggregate);
			if (lowestAgg == undefined){
				lowestAgg = aggregate;
				theWinner = possMatch;
				matchesArray.unshift();
			}
			else if (aggregate < lowestAgg){
				lowestAgg = aggregate;
				theWinner = possMatch;
			}
			console.log(lowestAgg);
		}
		compatiPal = theWinner;
	}
	findMatch();

	// var compatiPal = { name: "Harry", photo: "http://www.animalspot.net/wp-content/uploads/2015/05/Pronghorn-Antelope.jpg" };
	
	friends.push(newFriend);
	// res.send(compatiPal);
	res.json(compatiPal);
});
// 
// 
module.exports = router;
// 
// module.exports = function(app) {
	// app.post("/api/friends", function(req, res){
		// res.json({ name: "Harry", photo: "http://www.animalspot.net/wp-content/uploads/2015/05/Pronghorn-Antelope.jpg" });
	// });}
// 
