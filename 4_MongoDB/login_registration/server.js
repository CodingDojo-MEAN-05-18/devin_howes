// Configuration
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const session = require('express-session');
app.use(session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000},
}));

const flash = require('express-flash');
app.use(flash());

const bcrypt = require('bcrypt-as-promised');

// Database Connection
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/loginregistration');

// Database Schema
const UserSchema = new Schema({
    first_name: {
        type: String,
        required: [true, "First name cannot be blank!"]
    },
    last_name: {
        type: String,
        required: [true, "Last name cannot be blank!"]
    },
    email: {
        type: String,
        required: [true, "Email is required!"]
    },
    password: {
        type: String,
        required: [true, "Password cannot be blank!"],
        minLength: [6, "Password must be at least six characters!"]
    },
    birthday: {
        type: Date,
        required: [true, "Birthday is required!"]
    }
}, {timestamps: true});

// Routes
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/user/dashboard', function(req, res) {
    res.render('dashboard');
})

app.post('/user/add', function(req, res) {
    res.redirect('dashboard');
});

app.post('/user/login', function(req, res) {
    res.redirect('dashboard');
})

// Server Port
app.listen(8000, function() {
    console.log('Listening on Port 8000');
});