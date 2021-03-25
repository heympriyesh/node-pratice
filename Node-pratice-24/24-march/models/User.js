const mongoose=require('mongoose');
const {isEmail}=require('validator');
const bcrypt=require('bcrypt')

const userShema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,'Please enter an email'],
        unique:true,
        lowercase:true,
        validate:[isEmail,'Please enter a valid email']
    },
    password:{
        type:String,
        required:[true,'Please enter an password'],
        minlength:[6,'Minimum password length is 6 characters']
    }
},{timestamps:true})

//After the data is saved in database
// userShema.post('save',function(doc,next){
//     console.log('new user was created & saved',doc)
//     next();
// })


//Before the data is saved in database
userShema.pre('save',async function(next){
    // console.log('user aobut to be created & saved',this)
    const salt=await bcrypt.genSalt();
    this.password=await bcrypt.hash(this.password,salt);
    next();
})
const User=mongoose.model('user',userShema);

module.exports=User;