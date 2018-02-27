var express = require("express");
var friends = require("../data/friends");

var router = express.Router();


router.get("/friends", function(req, res) {
  var chosen = req.params.characters;
    res.json(friends);

    // for (var i = 0; i < friends.allFriends.length; i++) {
    // }

});

// create new user profile and match with compatible friend
router.post("/friends", function(req, res) {

// run compatibility algorithm





  var newFriend = req.body;

  console.log(newFriend);

  friends.allFriends.push(newFriend);

  res.json(compatiPal);
});


module.exports = router;

