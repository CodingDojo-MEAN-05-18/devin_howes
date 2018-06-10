// Export / Import
// Require mongoose for mongodb
const mongoose = require('mongoose');
// Bring in Quote schema
const name = mongoose.model('Name');
// Bring in Controllers
const nameController = require('../controllers/names')

// Export routes back to server.js
module.exports = function (app) {
    // Routes
    app.get('/', nameController.index);
    app.get('/:name', nameController.view);
    app.get('/new/:name/', nameController.add);
    app.get('/remove/:name/', nameController.delete);
};
