const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Mongo DB Connected Successfully 🤔🤔")
    }
    catch (err) {
        console.log("Mongo DB Connection Error: ", err);
    }
}

module.exports = connectDB;