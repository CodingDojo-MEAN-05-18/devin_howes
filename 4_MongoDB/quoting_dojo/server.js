// Configurations
// Express
var express = require('express');
var app = express();

// Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Path and EJS
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Session
var session = require('express-session');
app.use(session({
    secret: 'asfkjdadgl',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

// Flash
var flash = require('express-flash');
app.use(flash());

// Import Database
require('./server/config/database');

// Import Routes
require('./server/config/routes.js')(app);

// Server Port
app.listen(8000, function() {
    console.log("Listening on Port 8000");
});