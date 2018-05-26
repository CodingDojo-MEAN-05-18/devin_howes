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
let chats = [];

io.on('connection', function(socket) {
    console.log('user connected');
    
    // listen for new user name:
    socket.on('got_new_user', function(req){
        all_users.push(req.name);
        // console.log(users);
        io.emit('new_user', {new_user: req.name});
    });

    // listen for new messages:
    socket.on('new_message', function(data){
        // console.log('message' + data);
        chats.push({user: data.user, message: data.message});
        io.emit('update_chat', data);
    });

    // every user sees all users and chats:
    socket.emit('existing_users', all_users);
    console.log(all_users);

    socket.emit('chat_history', chats);
    console.log(chats);
});