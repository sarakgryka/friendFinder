$(document).ready(function () {

    $("#results").on("click", function (event) {
        event.preventDefault();

        let scoresAns = [];

        scoresAns.push($("#question1").val());
        scoresAns.push($("#question2").val());
        scoresAns.push($("#question3").val());
        scoresAns.push($("#question4").val());
        scoresAns.push($("#question5").val());
        scoresAns.push($("#question6").val());
        scoresAns.push($("#question7").val());
        scoresAns.push($("#question8").val());
        scoresAns.push($("#question9").val());
        scoresAns.push($("#question10").val());

        console.log(scoresAns);


        let newFriend = {
            name: $("#nameForm").val().trim(),
            photo: $("#picForm").val().trim(),
            scores: scoresAns

        };

        $
        .post("/api/friends", newFriend)
        .then(function(response){

            console.log(response);
        })

       
    })

})