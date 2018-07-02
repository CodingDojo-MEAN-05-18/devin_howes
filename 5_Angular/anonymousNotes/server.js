const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// step 13 in notes: tell express to use angular
app.use(express.static(path.join(__dirname, 'dist')));

// step 12 in notes: add routes (next 2 lines)
require('./server/config/database');
// step 17 in notes: add '/api' before require
app.use('/api', require('./server/config/routes')); 
// step 16 in notes: add catch-all route
app.use(require('./server/config/routes/catch-all.route'));

//
app.listen(port, () => console.log(`listening on port ${port}`));