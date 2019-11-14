const friends = require("./app/data/friends");
const path = require("path");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// used for converting/reading data as json that is in POST body.
app.use(express.json());
// used to read arrays/strings that the FORM POSTs.
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./app/public"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log(`listening on http://localhost:${PORT}`);
});