const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv = require('dotenv');
const crudRouter=require('./router/crudRouter');
const bodyParser=require('body-parser')
dotenv.config()

app.use(express.json());
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("hello how are you")
})
app.use(crudRouter);
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(result=>
    console.log('connected to Database'),
    app.listen(5000,()=>{
        console.log('Server is up and running on port 4000');
    })
).catch(err=> console.log(err))



