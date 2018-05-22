// start express and assign to app
const express = require('express');
const app = express();

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

// app.get('/cat_info/:id', function (request, response) {
//     var cat_id = request.params.id;
app.get('/cat_info/1', function (request, response) {
    var cat_info = {
        id: 1, // could use cat_id if using dynamic route
        name: "Cuddles",
        age: 3,
        food: "Salmon",
        hobbies: ['Sleeping', 'Playing', 'Chasing Mice']
    };
    response.render('cat_info', {context: cat_info});
});

app.get('/cat_info/2', function (request, response) {
    var cat_info = {
        id: 2,
        name: "Zippy",
        age: "6 mos",
        food: "Tuna",
        hobbies: ['Playing', 'Bouncing', 'Chasing Mice']
    };
    response.render('cat_info', { context: cat_info });
});

app.get('/cat_info/3', function (request, response) {
    var cat_info = {
        id: 3,
        name: "Max",
        age: 7,
        food: "Edible",
        hobbies: ['Sleeping', 'Napping']
    };
    response.render('cat_info', { context: cat_info });
});


// tell express what port to listen on
app.listen(8000, function() {
    console.log('Listening on port 8000');
});