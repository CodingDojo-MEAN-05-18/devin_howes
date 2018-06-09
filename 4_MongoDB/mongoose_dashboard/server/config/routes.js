// Export / Import
// Require mongoose for mongodb
const mongoose = require('mongoose');
// Bring in Quote schema
const Wolve = mongoose.model('Wolve');
// Bring in Controllers
const wolveController = require('../controllers/wolves')

// Export routes back to server.js
module.exports = function (app) {
    // Routes
    app.get('/', wolveController.index);
    app.get('/wolves/new', wolveController.new);
    app.get('/wolves/:id', wolveController.view);
    app.post('/wolves', wolveController.create);
    app.get('/wolves/edit/:id', wolveController.edit);
    app.post('/wolves/:id', wolveController.update);
    app.get('/wolves/destroy/:id', wolveController.destroy);
};

