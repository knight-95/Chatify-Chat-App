const mongoose = require("mongoose");
const MONGO_URI="mongodb+srv://chaitfy:mongo123@cluster0.fz6bmoq.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(error){
        console.log(`Error: ${error.message}`);
        process.exit();
    }
}
module.exports = connectDB;