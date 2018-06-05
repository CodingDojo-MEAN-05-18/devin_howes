/// Configurations
// Express
var express = require('express');
var app = express();
// Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
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
    cookie: {
        maxAge: 60000
    }
}));
// Flash
var flash = require('express-flash');
app.use(flash());

// Database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dashboard');
// Database Schema
var WolveSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be three characters"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"]
    },
    color: {
        type: String,
        required: [true, "Wolve must have a color"],
    },
    isAggressive: {
        type: Boolean,
        required: [true, "Must provide an aggression value"],
    }
}, {
    timestamps: true
});
mongoose.model('Wolve', WolveSchema);
var Wolve = mongoose.model('Wolve');

// Routes
app.get('/', function (req, res) {
    Wolve.find({}, function (err, wolves) {
        if (err) {
            console.log("Something went wrong");
        } else {
            res.render('index', { wolves });
        }
    });
});

// GET '/wolves/new' Displays a form for making a new wolf.
app.get('/wolves/new', function(req, res) {
    res.render('new');
});

// GET '/wolves/:id' Displays information about one wolf.
app.get('/wolves/:id', function(req, res) {
    var id = (req.params.id);

    Wolve.find({_id: id}, function (err, wolves) {
        if (err) {
            console.log("Something went wrong");
        } else {
            res.render('profile', { wolves });
        }
    });
})

// POST '/wolves' Should be the action attribute for the form in the above route(GET '/wolves/new').
app.post('/wolves', function(req, res) {
    console.log(req.body);

    var wolve = new Wolve({
        name: req.body.name,
        age: req.body.age,
        color: req.body.color,
        isAggressive: req.body.isAggressive
    });

    wolve.save(function (err) {
        if (err) {
            console.log('something went wrong', err);
            for (var key in err.errors) {
                req.flash('addwolve', err.errors[key].message);
            }
            res.redirect('/wolves/new');
        } else {
            console.log('Successfully added a wolf');
            res.redirect('/');
        }
    });
});

// GET '/wolves/edit/:id' Should show a form to edit an existing wolf.

// POST '/wolves/:id' Should be the action attribute for the form in the above route(GET '/wolves/edit/:id').

// POST '/wolves/destroy/:id' Should delete the wolf from the database by ID.


// Server Port
app.listen(8000, function () {
    console.log("Listening on Port 8000");
});