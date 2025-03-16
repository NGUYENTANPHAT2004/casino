const mongoose = require('mongoose');

const usermschema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    phone: String,
    password: String,
    avatar: String,
    introduction : String
});

module.exports = mongoose.model('user', usermschema);
