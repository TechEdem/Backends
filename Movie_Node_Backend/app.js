const express = require('express')
const userRouter = require('./routes/user')
const app = express();
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({path: '../config/config.env'});


app.use(express.json());

// Logging middleware

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

// Connect to database
// Mount routes
app.use(userRouter);


const PORT = process.env.PORT || 8903;

app.listen(PORT, ()=>{
    console.log(`Server is running successfully`.blue.underline);
});