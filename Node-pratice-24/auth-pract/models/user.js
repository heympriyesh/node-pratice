const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema= new Schema ({
  name:{
    type:String,
    required:true,
    max:255,
    min:6
  }
,
email:{
  type:String,
  required:true,
  max:255,
  min:6
}
,
password:{
  type:String,
  required:true,
  min:6,
  max:1024
}
,
date:{type:Date,
default:Date.now}
})

const User = mongoose.model("User",userSchema)

module.exports= User