const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const reg = new RegExp('\\.js$', 'i'); // match .js file ext case insensitive
const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/notes', {
    // add username and password for production
});

// tell us when mongodb is connected
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

// for older mongoose versions (prior to 5)
mongoose.Promise = global.Promise;

// use synchronous for this config
fs.readdirSync(modelsPath).forEach(file => {
    if (reg.test(file)) {
        require(path.join(modelsPath, file));
    }
});