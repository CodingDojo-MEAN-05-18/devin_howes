// Import Mongoose
const mongoose = require('mongoose');

// Create Schema
const nameSchema = new mongoose.Schema({
    name: {
        type: String,
    },
}, {
    timestamps: true
});

// Export Schema
module.exports = mongoose.model('Name', nameSchema);