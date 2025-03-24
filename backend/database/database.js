require('dotenv').config();
const mongoose = require('mongoose');


const connectDB = () => {
    try
    {
        mongoose.connect(process.env.MONGODB_URI);
        console.log("Server connected successfully");
    }
    catch(err)
    {
        console.log("An error ocurred");
    }
}

module.exports = connectDB;