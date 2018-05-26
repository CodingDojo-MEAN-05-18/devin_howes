module.exports = function Route(app, server) {
    // Session
    const session = require('express-session');
    app.use(session({
        secret: 'bigsecret',
        resage: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 60000
        }
    }));
    
    // socket code
    const io = require('socket.io')(server);
    let all_users = [];
    let chats = [];

    if (!session.count) {
        session.count = 0;
    };

    io.on('connection', function (socket) {
        console.log(`user ${ session.count } connected`);

        // listen for new user name:
        socket.on('got_new_user', function (req) {
            session.user_id = session.count;
            session.count++;

            session.user_name = req.name;

            all_users.push({
                id: session.user_id,
                name: session.user_name
            });

            if (all_users.length !== 0) {
                io.emit('new_user', {
                    new_user: req.name
                });
                io.emit('existing_users', all_users);
            }
        });

        // listen for new messages:
        socket.on('new_message', function (data) {
            chats.push({
                user_id: data.user,
                user_name: data.user_name,
                message: data.message
            });
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
};