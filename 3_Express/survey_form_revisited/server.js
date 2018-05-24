const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env['PORT'] || 8000;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routes
app.get('/', function(req, res){
    res.render('index');
});

// port
// server variable added to use with socket.io line 25
const server = app.listen(port, function(){
    console.log(`Listening on port ${ port }`);
});

// socket.io
const io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    socket.on('posting_form', function (data) {
        console.log('data' + data);
        // generate random number
        var random = Math.floor((Math.random() * 1000) + 1);
        // emit data
        socket.emit('updated_message', {response: data});
        socket.emit('random', {response: random});
    });
});