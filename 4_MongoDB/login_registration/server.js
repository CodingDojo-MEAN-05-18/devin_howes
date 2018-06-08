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

// default session login value:
session.login = false;
session.user = '';

const flash = require('express-flash');
app.use(flash());

const bcrypt = require('bcrypt-as-promised');

// Database Connection
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/loginreg');
console.log('Mongoose connected');

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
        unique: [true, "Email is taken!"],
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

const User = mongoose.model('User', UserSchema);

// Routes
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/user/dashboard', function(req, res) {
    console.log(req.session.user);
    if (session.login == false) {
        console.log("You don't have persmission!");
        res.redirect('/');
    } else {
        res.render('dashboard', {user_info: session.user});
    }
});

app.post('/user/add', function(req, res) {
    const data = req.body;

    // Hash Password before saving!!
    
    // Save user
    User.create(data, function (err, user) {
        if (err) {
            console.log('Something went wrong saving user', err);
        } else {
            console.log('User created!');
            User.find({email: data.email}, function(err, user) {
                if (err) {
                    console.log('Something went wrong getting user');
                } else {
                    session.login = true;
                    session.user = user[0];
                }
            });
            res.redirect('/user/dashboard');
        }
    });
});

app.post('/user/login', function(req, res) {
    // need to add unhashing here!
    // need to add flash message here!
    User.find({email: req.body.login_email}, function(err, user) {
        if (user.length < 1) {
            console.log('user not found');
            res.redirect('/');
        } else {
           if (user[0].password == req.body.login_password) {
                    console.log('login successful');
                    session.user = user[0];
                    session.login = true;
                    res.redirect('/user/dashboard');
            } else {
                console.log('User password incorrect');
                res.redirect('/');
            }
        }
    });
});

app.get('/user/logout', function(req, res) {
    req.session.destroy();
    session.login = false;
    res.redirect('/');
});

// Server Port
app.listen(8000, function() {
    console.log('Listening on Port 8000');
});