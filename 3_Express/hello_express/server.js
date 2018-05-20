// loads express module
var express = require("express");

// invoke express, store in app variable
var app = express();

// setup our base route
app.get('/', function(request, response) {
    response.send("<h1>Hello Express</h1>");
});

// tell express to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});

// use nodemon when running > nodemon server.js