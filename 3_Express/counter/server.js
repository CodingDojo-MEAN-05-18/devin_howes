var express = require('express');
var path = require('path');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.use(session({
    secret: 'bigsecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

if (!session.count) {
    session.count = 0;
};

// routes
app.get('/', function(req, res){
    session.count++;
    res.render('index', {count: session.count});
});

app.get('/add2', function (req, res) {
    session.count++;
    res.redirect('/');
});

app.get('/reset', function(req, res){
    session.count = 0;
    res.redirect('/');
});

// port
app.listen(8000, function() {
    console.log('Listening on port 8000');
});