const jwt=require('jsonwebtoken');
const User = require('../models/User');

const requireAuth=(req,res,next)=>{
    const token=req.cookies.jwt;

    if(token){
        jwt.verify(token, 'priyesh pandey auth',(err,decodedToken)=>{
            if(err){
                console.log(err.message);
                res.redirect('/login')
            }else{
                console.log(decodedToken);
                next();
            }
        })
    }else{
        res.redirect('/login')
    }
}

//Check current User

const checkUser=(req,res,next)=>{
    const token=req.cookies.jwt;
    if(token){
        jwt.verify(token, 'priyesh pandey auth',async (err, decodedToken) => {
        if(err){
            console.log(err.message);
            res.locals.user=null;
            next();
        }else{
            console.log(decodedToken);
            let user=await User.findById(decodedToken.id);
            res.locals.user=user;
            next();
        }
    })
}else{
    res.locals=null;
    next();
}
}
module.exports={requireAuth,checkUser}