// Configurations

// Express
const express = require('express');
const app = express();

// Path
const path = require('path');

// Session
const session = require('express-session');
app.use(session({
    secret: 'bigsecret',
    resage: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

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

// socket code
const io = require('socket.io')(server);
let all_users = [];
let chats = [];

if (!session.count) {
    session.count = 0;
};

io.on('connection', function(socket) {
    console.log(`user ${ session.count } connected`);

    // listen for new user name:
    socket.on('got_new_user', function(req){
        session.user_id = session.count;
        session.count++;

        session.user_name = req.name;

        all_users.push({
            id: session.user_id,
            name: session.user_name
        });

        if (all_users.length !== 0){
            io.emit('new_user', {new_user: req.name});
            io.emit('existing_users', all_users);
        }
    });

    // listen for new messages:
    socket.on('new_message', function(data){
        chats.push({user_id: data.user, user_name: data.user_name, message: data.message});
        io.emit('update_chat', data);
    });

    // every user sees all users and chats:
    socket.emit('chat_history', chats);
    
});

// route
app.get('/', function (req, res) {
    res.render('index', {
        id: session.user_id,
        name: session.user_name
    });
});