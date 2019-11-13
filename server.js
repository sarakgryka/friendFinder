const friends = require("./app/data/friends");
const path = require("path");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// used for converting/reading data as json that is in POST body.
app.use(express.json());
// used to read arrays/strings that the FORM POSTs.
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// //path for homepage
app.get("/", function(req, res){

res.sendFile(path.join(__dirname, "./app/public/home.html"))


})

//path to survey
app.get("/survey", function(req, res){

    res.sendFile(path.join(__dirname, "./app/public/survey.html"))


    
})
//path to api for all friends
app.get("/api/friends", function(req, res){

    res.json(friends);
})
//path to api for specific id
app.get("/api/friends/:id", function(req, res){

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
app.post("/api/friends", function(req,res){

const newFriend = req.body;

console.log(newFriend);

friends.push(newFriend)
//data should go to app/data/friends.js
//compatability 


})

app.listen(PORT, function () {
    console.log(`listening on http://localhost:${PORT}`);
});