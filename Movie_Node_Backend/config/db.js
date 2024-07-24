const mongoose = require('mongoose');

const uri = process.env.MONGO_URI

const connectDB = async()=>{
   try {
    const conn = await mongoose.connect(uri);
   
   console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
   } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`.red.bold)
    process.exit(1) // exit application with error
   }
}
 module.exports=connectDB