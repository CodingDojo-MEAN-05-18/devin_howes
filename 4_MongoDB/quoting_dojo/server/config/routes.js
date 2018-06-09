// Export / Import
// Require mongoose for mongodb
const mongoose = require('mongoose');
// Bring in Quote schema
const Quote = mongoose.model('Quote');
// Bring in Controllers
const quoteController = require('../controllers/quotes')

// Export routes back to server.js
module.exports = function(app) {
    // Routes
    app.get('/', quoteController.index);
    app.get('/quotes', quoteController.quotes);
    app.post('/addquotes', quoteController.new);
};