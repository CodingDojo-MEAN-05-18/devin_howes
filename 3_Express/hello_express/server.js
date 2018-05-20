// 1 loads express module
var express = require('express');

// 2 invoke express, store in app variable
var app = express();

// 3 tell express to use the static folders app
app.use(express.static(__dirname + '/static'));

// 4 tell express to use ejs
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// 5 setup our base route
app.get('/', function(request, response) {
    response.send("<h1>Hello Express</h1>");
});

// 6 static users route sample
app.get('/users', function(request, response) {
    // hard coded user data for example
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
});

// final: tell express to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});

// use nodemon when running > nodemon server.js