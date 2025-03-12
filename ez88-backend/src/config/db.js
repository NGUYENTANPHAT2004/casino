const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('MONGO_URI=mongodb+srv://phat1z:phatdz17052004@ez88-cluster.mongodb.net/ez88?retryWrites=true&w=majority');
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
