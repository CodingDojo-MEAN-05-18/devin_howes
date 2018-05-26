module.exports = function Route(app, server) {
    // Session
    const session = require('express-session');
    app.use(session({
        secret: 'bigsecret',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }
    }));
    
    // socket code
    const io = require('socket.io')(server);
    let all_users = [];
    let chats = [];
    let current_user = '';

    io.on('connection', function (socket) {
        console.log("user connected");

        // listen for new user name:
        socket.on('got_new_user', function (req) {
            all_users.push({
                name: req.name,
            });

            current_user = req.name;

            io.emit('new_user', { new_user: req.name });
        });

        // listen for new messages:
        socket.on('new_message', function (data) {
            chats.push({
                user_name: data.user_name,
                message: data.message
            });
            io.emit('update_chat', data);
        });

        // every user sees all users and chats:
        socket.emit('chat_history', chats);
        socket.emit('existing_users', all_users);

    });

    // route
    app.get('/', function (req, res) {
        console.log(current_user);
        res.render('index');
    });
};