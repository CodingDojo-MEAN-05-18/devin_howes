// Import Mongoose
const mongoose = require('mongoose');

// Create Schema
const WolveSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be three characters"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"]
    },
    color: {
        type: String,
        required: [true, "Wolve must have a color"],
    },
    isAggressive: {
        type: Boolean,
        required: [true, "Must provide an aggression value"],
    }
}, {
    timestamps: true
});

// Export Schema
module.exports = mongoose.model('Wolve', WolveSchema);