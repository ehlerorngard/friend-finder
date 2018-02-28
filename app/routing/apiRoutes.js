var express = require("express");
var friends = require("../data/friends");

var router = express.Router();

router.get("/friends", function(req, res) {
    res.json(friends);
});

//=================================
// create new user profile and match with compatible friend
router.post("/friends", function(req, res) {
	var newFriend = req.body;
	// convert user's answers to integers
	var newArray = [];
	var integers = function(scores){
		for (i = 0; i < scores.length; i++) {
			newArray.push(parseInt(scores[i]));
		}
	};
	integers(newFriend.scores);
	newFriend.scores = newArray;
	// this will be sent back in the response	
	var compatiPal;

//================================
//======= matching algorithm =====
//================================
	function findMatch(){
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
	friends.push(newFriend);
	res.json(compatiPal);
});


module.exports = router;

