// $(document).ready(function () {

const friends = require("../data/friends");

module.exports = function (app) {

    //path to api for all friends
    app.get("/api/friends", function (req, res) {

        res.json(friends);
    })
    //path to api for specific id
    app.get("/api/friends/:id", function (req, res) {

        let friendId = req.params.id;
        friendId = friendId.toLowerCase();

        console.log(friendId);

        for (let i = 0; i < friends.length; i++) {
            if (friends[i].name.toLocaleLowerCase() === friendId) {
                console.log(friends[i]);

                return res.json(friends[i]);
            }
        }
        return res.json(false);



    })
    //path for post for new surveys 
    app.post("/api/friends", function (req, res) {

        const newFriend = req.body;

        console.log(newFriend);

        friends.push(newFriend)
        //data should go to app/data/friends.js
        //compatability 

            let compare = [];
    //check compatability against the existing friends to see who is most compatabile using totalDifference

    for (let i = 0; i < friends.length; i++) {

        let existingFriends = friends[i];

        let totalDifference = 0;

        //loop through friends to find totalDifference for all 

        for (let j = 0; j < existingFriends.scores.length; j++) {

            var difference = Math.abs(existingFriends.scores[j] - newFriend.scores[j]);
            totalDifference += difference;

        }

        compare.push(totalDifference);
    }

    let matchArr = compare[0];
    let matchIndex = 0;


    //loop  through compare array to check for the least totalDifference
    for (let i = 0; i < compare.length; i++) {


        if (compare[i] < matchArr) {

            matchArr = compare[i];
            matchIndex = i;
        }

        console.log(matchIndex);

    }

    // modal to show most compatiable 

    res.send(friends[matchIndex]);

  


    })


}

// $("#results").on("click", function (event) {
//     event.preventDefault();

//     let scoresAns = [];

//     scoresAns.push($("#question1").val());
//     scoresAns.push($("#question2").val());
//     scoresAns.push($("#question3").val());
//     scoresAns.push($("#question4").val());
//     scoresAns.push($("#question5").val());
//     scoresAns.push($("#question6").val());
//     scoresAns.push($("#question7").val());
//     scoresAns.push($("#question8").val());
//     scoresAns.push($("#question9").val());
//     scoresAns.push($("#question10").val());

//     console.log(scoresAns);


//     let newFriend = {
//         name: $("#nameForm").val().trim(),
//         photo: $("#picForm").val().trim(),
//         scores: scoresAns

//     };

//     console.log(newFriend);




// app.post("/api/friends", function (req, res) {

//     let compare = [];
//     //check compatability against the existing friends to see who is most compatabile using totalDifference

//     for (let i = 0; i < friends.length; i++) {

//         let existingFriends = friends[i];

//         let totalDifference = 0;

//         //loop through friends to find totalDifference for all 

//         for (let j = 0; j < existingFriends.scores.length; j++) {

//             var difference = Math.abs(existingFriends.scores[j] - newFriend.scores[j]);
//             totalDifference += difference;

//         }

//         totalDifference.push(compare);
//     }

//     let matchArr = compare[0];
//     let matchIndex = 0;


//     //loop  through compare array to check for the least totalDifference
//     for (let i = 0; i < compare.length; i++) {


//         if (compare[i] < matchArr) {

//             matchArr = compare[i];
//             matchIndex = i;
//         }

//         console.log(matchIndex);

//     }

//     // modal to show most compatiable 

//     res.send(friends[matchIndex]);

//     //push new friend to data
//     friends.push(newFriend);

// });
