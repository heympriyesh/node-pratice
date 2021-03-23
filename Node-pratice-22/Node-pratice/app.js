var express = require('express');
var mongoose = require('mongoose');
var Pratice = require('./models/profile');

const app = express();
const url = 'mongodb+srv://netninja:test1234@nodepratice.zmn1l.mongodb.net/pratice-node?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000, () => {
        console.log("App is running on port 3000");
    }))
    .catch(err => console.log('Error while saving in mongoose', err));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
    const pratice = new Pratice({
        Name: 'Priyesh Pandey',
        age: 22,
        gender: 'male'
    });
    pratice.save()
        .then((result) => {
            console.log("Result is ", result)
        })
        .catch(err => {
            console.log(err)
        })
    res.render('home', { home: 'This is our home' })
})

app.post('/show-data',(req,res)=>{
    const pratice=new Pratice(req.body);
    pratice.save()
    .then(result=>{
        res.redirect('/show-data')
    })
    .catch(err=>{
        console.log(err)
    })
})

app.get('/show-data', (req, res) => {
    Pratice.find()
        .then(rest => {
            res.render('showdata', { Pratice: rest })
        })
        .catch(err => {
            console.log(err)
        })
})

// Form
app.get('/form',(req,res)=>{
    res.render('form')
})

