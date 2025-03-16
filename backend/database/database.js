const mongoose = require('mongoose');

const connectDB = () => {
    try
    {
        mongoose.connect("mongodb://localhost:27017/personal");
        console.log("Server connected successfully");
    }
    catch(err)
    {
        console.log("An error ocurred");
    }
}

module.exports = connectDB;