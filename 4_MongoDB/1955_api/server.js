// Configurations
// Express
const express = require('express');
const app = express();

// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Path
const path = require('path');

// Database
require('./server/config/database');

// Routes
require('./server/config/routes.js')(app);

// Server
app.listen(8000, function() {
    console.log('Listening on port 8000');
});