// Config
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
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 6000}
}));

const flash = require('express-flash');
app.use(flash());

// Database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board');
// Database Schema
const CommentSchema = new mongoose.Schema({
    content: {type: String, required: [true, "Comment cannot be blank!"]}
}, {timestamps: true});
const PostSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name cannot be blank!"]},
    content: {type: String, required: [true, "Message cannot be blank!"]},
    comments: [CommentSchema]
}, {timestamps: true});

const Post = mongoose.model('Post', PostSchema);
const Comment = mongoose.model('Comment', CommentSchema);

// Routes
app.get('/', function(req, res) {
    Post.find({}, function(err, posts) {
        if (err) {
            console.log('Something went wrong');
        } else {
            res.render('index', { posts });
        }
    });
});

app.post('/message/add', function(req, res) {
    console.log(req.body);

    const post = new Post({
        content: req.body.message,
        name: req.body.name,
    });

    post.save(function (err) {
        if (err) {
            console.log('Something went wrong');
            for(var key in err.errors) {
                req.flash('newPost', err.errors[key].message);
                console.log(err.errors[key].message);
            }
            res.redirect('/');
        } else {
            console.log('successfully added a post!');
            res.redirect('/');
        }
    });
});

app.post('/comment/add', function (req, res) {
    console.log(req.body);

    const Post = mongoose.Schema('Post');
    const Comment = mongoose.Schema('Comment');

    Comment.create(req.body, function(err, data){
        if (err) {
            console.log('Something went wrong');
        } else {
            Post.findOneAndUpdate({_id: req.body.post_id}, {$push: {comments: data}}, function(err, data){
                if(err){
                    console.log('Something went wrong');
                }
                else {
                    console.log('successfully added a comment!');
                    res.redirect('/');
                }
            });
        }
    });
});

// Port
app.listen(8000, function() {
    console.log('Listening on Port 8000');
});