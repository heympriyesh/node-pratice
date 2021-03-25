const mongoose=require('mongoose');

const crudSchema=new mongoose.Schema({
        firstname:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        }

},{timestamps:true})

module.exports=mongoose.model('Crud',crudSchema)