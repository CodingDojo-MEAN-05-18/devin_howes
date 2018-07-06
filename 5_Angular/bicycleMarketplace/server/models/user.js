const uniqueValidator = require('mongoose-unique-validator');
const validator = require('validator');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'username is required'],
            trim: true,
            unique: [true, 'username is already taken'],
        },
        email: {
            type: String,
            required: [true, 'email is required'],
            unique: [true, 'email is already registered'],
            trim: true,
            validate: {
                validator(value) {
                    return validator.isEmail(value);
                },
            },
        },
        password: {
            type: String,
            required: [true, 'password is required'],
        },
    }, 
    { 
        timestamps: true, 
    }
);

userSchema.plugin(uniqueValidator, { message: `{PATH} must be unique` });

userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }

    bcrypt
        .hash(this.password, 10)
        .then(hashed => {
            this.password = hashed;

            next();
        })
        .catch(next);
});

userSchema.statics.validatePassword = function(
    candidatePassword,
    hashedPassword ) {
        return bcrypt.compare(candidatePassword, hashedPassword);
    };

module.exports = mongoose.model('User', userSchema);