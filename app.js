// require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const authRoutes = require('./routes/authRoute')
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json())
app.use(cookieParser());  

// middleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'pug');
// set the views directory
app.set('views', path.join(__dirname,'views'));

// database connection
const dbURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.use (authRoutes)


app.listen(()=>{
    console.log("you server is running");
})