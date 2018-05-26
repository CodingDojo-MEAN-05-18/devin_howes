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

// load the routes file, pass app and server into it (for handling url visits and events)
require('./routes/index.js')(app, server);