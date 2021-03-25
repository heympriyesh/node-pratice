const express = require('express');
const mongoose = require('mongoose');
const authRoutes=require('./routes/authRoutes')
const app = express();
const cookieParser=require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
// view engine
app.set('view engine', 'ejs');
// database connection
const dbURI = 'mongodb+srv://priyesh:test1234@nodepratice.zmn1l.mongodb.net/user?retryWrites=true';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => 
    console.log("Database Connected.."),
  app.listen(3000,()=>{
    console.log("Server is up and running...")
  }))
  .catch((err) => console.log(err));

// routes
// app.get('*',checkUser)
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.use(authRoutes);

// app.get('/set-cookie',(req,res)=>{
//   // res.setHeader('Set-Cookie','newUser=true');
//   res.cookie('newUser',false);
//   res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true})
//   res.send('You got the cookies!')
// })

// app.get('/read-cookie',(req,res)=>{
//   const cookie=req.cookies;
//   console.log(cookie);
//   res.json(cookie);
// })