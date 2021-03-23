const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser=require('body-parser')
require('dotenv/config')

const url = process.env.DB_CONNECTION;

//Import Routes
app.use(bodyParser.json())
const postRoute=require('./routes/posts');
app.use('/posts',postRoute);
//ROUTES
app.get('/',(req,res)=>{
    res.send('We are on home');
})

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('Connected to DB')
    })

app.listen(4000, () => {
    console.log("App is running on port 3000")
})