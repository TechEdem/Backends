const mongoose = require('mongoose');

const uri = process.env.MONGO_URI

const connectDB = async () => {
   try {
    const conn = await mongoose.connect("mongodb+srv://TechEdem:Jesus123@techedem.ol5kcgf.mongodb.net/");
   
   console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
   } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`.red.bold)
    process.exit(1) // exit application with error
   }
};
 module.exports=connectDB