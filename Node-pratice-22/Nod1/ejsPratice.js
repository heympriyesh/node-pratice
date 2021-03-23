const express=require("express");
const app=express();

app.set('view engine','ejs');

app.get("/",(req,res)=>{
    res.render('Profile')
})
app.get("/profile/:name",(req,res)=>{
    data={email:'pp@gm.com',address:'noida',skills:['nodejs','react','java']}
    console.log(req.params.name)
    res.render("Profile",{name:req.params.name,data})
})
app.listen(4500)