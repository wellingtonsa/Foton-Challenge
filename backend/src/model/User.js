const mongoose = require('../common/database');
// const bcrypt = require('bcryptjs');

const User = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true
    },
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task',
            required: false,
        }
    ],
})

module.exports = mongoose.model('User', User);