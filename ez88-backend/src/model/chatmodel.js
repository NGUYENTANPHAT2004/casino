const mongoose = require('mongoose');

const chatschema = new mongoose.Schema({
    userId : String,
    content : String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('chat', chatschema);
