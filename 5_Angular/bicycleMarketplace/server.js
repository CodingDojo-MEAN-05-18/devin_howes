const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const logger = require('morgan');


const port = process.env.PORT || 8000;
const app = express();

const sessionConfig = {
  saveUninitialized: true,
  secret: 'supersecret',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 360000,
  },
};

require('./server/config/database');

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(logger('dev'))
  // step 13 in notes: tell express to use angular
  .use(express.static(path.join(__dirname, 'dist/bicycleMarketplace')))
  .use(cookieParser(';alkdfjladjfldsajfhsad'))
  .use(session(sessionConfig))  
  // step 12 in notes: add routes (next 2 lines)
  // step 17 in notes: add '/api' before require
  .use('/api', require('./server/routes'))
  // step 16 in notes: add catch-all route
  .use(require('./server/routes/catch-all.route'));

app.listen(port, () => console.log(`Express server listening on port ${port}`));
