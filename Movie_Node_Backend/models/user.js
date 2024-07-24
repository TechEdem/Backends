const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        required: true,
        type: String,
    },
    lastname: {
        required: true,
        type: String,
    },
    gender: {
        required: true,
        type: String,
        enum: ['male', 'female', 'other'],
    },
    dob: {
        required: true,
        type: Date,
    },
    address: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: {
        required: true,
        type: String,
        minlength: 8,
        select: false,
    },

})

module.exports = mongoose.model('User', userSchema);