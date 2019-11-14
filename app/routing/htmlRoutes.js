
$(document).ready(function () {
    $("#check").on("click", function (event) {
        event.preventDefault();
     // on click take to survey    
        app.get("/survey", function(req, res){

            res.sendFile(path.join(__dirname, "./app/public/survey.html"))
        
        
            
        })

   
    });
});
































