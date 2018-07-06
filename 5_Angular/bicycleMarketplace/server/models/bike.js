const mongoose = require('mongoose');
const { Schema } = mongoose;

const bikeSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'provide a book title'],
      trim: true,
    },
    description: {
        type: String,
        required: [true, 'description is requied'],
        maxlength: [200, 'description is too long'],
        trim: true,
    },
    price: {
      type: Number,
      min: [1, 'price must be at least $1'],
      required: true,
    },
    location: {
        type: String,
        required: [true, 'location is required'],
        trim: true,
    },
    image: {
        type: String,
        required: [true, 'image is required'],
        trim: true,
    },
    ownerId: {
        type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Bike', bikeSchema);
