// Configurations

// Express
const express = require('express');
const app = express();

// Path
const path = require('path');

// Static Directory
app.use(express.static(path.join(__dirname, 'static')));

// Use EJS
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Port & Server
const port = process.env.PORT || 8000;
const server = app.listen(port, function () {
    console.log(`Listening on port ${ port }`);
});

// route
app.get('/', function(req, res){
    res.render('index');
});

// socket code
const io = require('socket.io')(server);
let all_users = [];

io.on('connection', function(socket) {
    console.log('user connected');
    
    // listen for new user name:
    socket.on('got_new_user', function(req){
        all_users.push(req.name);
        // console.log(users);
        io.emit('new_user', {new_user: req.name});
    });

    // every user sees all users:
    socket.emit('existing_users', all_users);
    console.log(all_users);
    
});