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

// Database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');
// Database Schema
var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is required"], minlength: [3, "Name must be three characters"]},
    quote: {type: String, required: [true, "Quote is required"]}
}, {timestamps: true });
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

// Routes
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/quotes', function(req, res) {
    Quote.find({}, function(err, quotes) {
        if(err) {
            console.log("Something went wrong");
            res.redirect('/');
        } else {
            console.log(quotes);
            res.render('quotes', {quotes: quotes});
        }
    });
});

app.post('/addquotes', function(req, res) {
    console.log('POST DATA', req.body);
    var quote = new Quote({name: req.body.name, quote: req.body.quote});

    quote.save(function(err) {
        if(err) {
            console.log('something went wrong', err);
            for (var key in err.errors) {
                req.flash('addquote', err.errors[key].message);
            }
            res.redirect('/');
        } else {
            console.log('Successfully added a quote');
            res.redirect('/quotes');
        }
    });
});

// Server Port
app.listen(8000, function() {
    console.log("Listening on Port 8000");
});