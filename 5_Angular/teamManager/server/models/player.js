const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    position: {
        type: String,
        required: true,
        trim: true,
    },
    statusOne: {
        type: String,
        required: true,
    },
    statusTwo: {
        type: String,
        required: true,
    },
    statusThree: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Player', playerSchema);