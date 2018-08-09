const friendsArray = require("../data/friends");
var friendMatch; //saves match as var while comparing answers
var matchDiff = 9999; //high initial diff to set first match

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function (req, res) {
        var newPerson = req.body;

        var surveyAnswers = newPerson.scores;

        //Calculate survey scores
        for (var i = 0; i < friendsArray.length; i++) {
            var diff = 0;
            for (var j = 0; j < surveyAnswers.length; j++) {
                diff += Math.abs(friendsArray[i].scores[j] - surveyAnswers[j]);
            }

            //Change friendMatch var if total difference is lower
            if (diff < matchDiff) {
                matchDiff = diff;
                friendMatch = friendsArray[i];
            }
        }

        friendsArray.push(newPerson);

        res.json({ status: "OK", name: friendMatch.name, photo: friendMatch.photo });

    });
}

