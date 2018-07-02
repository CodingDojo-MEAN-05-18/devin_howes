const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
    content: {
        type: String,
        required: true,
        trim: false,
    },
}, { timestamps: true });

// collection => Books
module.exports = mongoose.model('Note', noteSchema);