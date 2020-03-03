const mongoose = require('../common/database');
// const bcrypt = require('bcryptjs');

const Task = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Task', Task);