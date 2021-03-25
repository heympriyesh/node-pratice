const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const bodyParser=require('body-parser')
//Import Routes
const authRoute=require('./routes/auth');

dotenv.config();

//mongoose connect
mongoose.connect(process.env.DB_CONNECT,
{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log('Connected to Data Base !')
})

//Middleware
// app.use(bodyParser.json())
app.use(express.json())
app.use('/api/user',authRoute);


app.listen(4000,()=>{
    console.log("Server is up and running")
})