const friendsData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });


    app.post("/api/friends", function(request, result) {
        var you = request.body;
        var newFriend = -1;
        var newFriendScore = 100;
        var currentFriendScore = 0;
        // Loop thru all friends in the friends table to identify the friend have the lowest score difference and then return friend so modal opens showing the friend.
        for (i = 0; i < friendsTable.length; i++) {

            if (you.sex != friendsTable[i].sex) {
                for (j = 0; j < you.scores.length; j++) {

                    currentFriendScore = currentFriendScore + Math.abs(friendsTable[i].scores[j] - you.scores[j]);
                }
                if (currentFriendScore <= newFriendScore) {
                    newFriend = i;
                    newFriendScore = currentFriendScore;
                }
                currentFriendScore = 0;
            }
        }
        friendsTable.push(you);
        newFriendDetails = friendsTable[newFriend];
        result.json(newFriendDetails);

    });


};