
const path = require("path");

module.exports = function (app) {

    // //path for homepage
    app.get("/", function (req, res) {

        res.sendFile(path.join(__dirname, "../public/home.html"))


    })

    //path to survey
    app.get("/survey", function (req, res) {

        res.sendFile(path.join(__dirname, "../public/survey.html"))



    })



}
































