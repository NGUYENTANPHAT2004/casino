const mongoose = require('mongoose');

const TaiXiuSchema = new mongoose.Schema({
    round: Number,
    result: String, 
    bets: [{ user: String, amount: Number, choice: String }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TaiXiu', TaiXiuSchema);
