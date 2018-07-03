const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 2,
    },
    position: {
        type: String,
        required: false,
    },
    statusOne: {
        type: String,
        required: true,
        trim: true,
        default: 'undecided',
    },
    statusTwo: {
        type: String,
        required: true,
        trim: true,
        default: 'undecided',
    },
    statusThree: {
        type: String,
        required: true,
        trim: true,
        default: 'undecided',
    },
}, { timestamps: true });

module.exports = mongoose.model('Player', playerSchema);