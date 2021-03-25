const express = require('express');
const router=express.Router()

const User =require('../models/user')

// validation
const Joi =require('joi')

const schema = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email(),

  password: Joi.string().min(6).required(),

}
)

router.post('/register',(req,res)=>{

  // validate data before making a user
 
  
 const{error,value} =schema.validate(req.body)
if(error) return res.status(400).send(error.details[0].message)
 

//  res.send(error.details[0].message)

  const user =new User(req.body)
  user.save()
  .then(result=>res.send(result))
  .catch(err=>res.status(404).send(err))
})


module.exports= router

// mongodb+srv://himanshu189:<password>@cluster0.z4ou1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority