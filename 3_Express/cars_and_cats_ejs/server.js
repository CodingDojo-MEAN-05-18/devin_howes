// start express and assign to app
var express = require('express');
var app = express();

// tell express to use the static files folder
app.use(express.static(__dirname + '/static'));

// tell express to use ejs
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// tell express to serve routes
app.get('/cars', function(request,response) {
    response.render('cars');
});

app.get('/cats', function (request, response) {
    response.render('cats');
});

app.get('/form', function (request, response) {
    response.render('new_car');
});

// tell express what port to listen on
app.listen(8000, function() {
    console.log('Listening on port 8000');
});