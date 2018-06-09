const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
// Regex to only find .js files
const reg = new RegExp('\\.js$', 'i');

// Path to models
const modelsPath = path.resolve('server', 'models');

// Mongoose Promise removes warning message
mongoose.Promise = global.Promise;

// Database Connection
mongoose.connect('mongodb://localhost/quoting_dojo');

// Import Models
fs.readdirSync(modelsPath).forEach(file => {
    // If the file matches our regex (is .js)
    if (reg.test(file)) {
        // require the file following your modelsPath
        require(path.join(modelsPath, file));
    }
});

