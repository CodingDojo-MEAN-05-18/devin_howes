// Import Mongoose
const mongoose = require('mongoose');

// Create Schema
const QuoteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be three characters"]
    },
    quote: {
        type: String,
        required: [true, "Quote is required"]
    }
}, {
    timestamps: true
});

// Export Schema
module.exports = mongoose.model('Quote', QuoteSchema);