// Configurations

// Express
const express = require('express');
const app = express();

// Path
const path = require('path');

// Static Directory
app.use(express.static(path.join(__dirname, 'static')));

// Port & Server
const port = process.env.PORT || 8000;
const server = app.listen(port, function() {
    console.log(`Listening on port ${ port }`);
});

// Socket.io
const io = require('socket.io')(server);

/* count is declared outside of the connection
so it is available to all connections and Not
just the current one */
let count = 0;

io.on('connection', function(socket) {
    console.log('User connected');
    // listen for click event:
    socket.on('buttonClick', function() {
        io.emit('updateCount', ++count);
    });

    // reset count when reset button is pressed
    socket.on('reset', function() {
        io.emit('updateCount', count = 0);
    });

    // make sure every new connect has right count
    socket.emit('updateCount', count);
});