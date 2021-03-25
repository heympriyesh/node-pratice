const { Router } = require('express');
const Crud = require('../model/Crud');
const router = Router();
//Get all the post
router.get('/crud',async (req,res)=>{
    try{
        const crud=await Crud.find();
            res.json(crud)
    }catch(er){
        res.json({message:err})
    }
})

//Create a post
router.post('/crud', async (req, res) => {
    const crud=new Crud({
        firstname: req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email
    });
    try{
        const save=await crud.save();
        res.json(save);
    }catch(err){
        res.json({message:err})
    }
})
//Update a post
router.patch('/crud/:postID', async (req, res) => {
    console.log("Update on this", req.params.postID)
    try {
        const updatedPost = await Crud.updateOne(
            { _id: req.params.postID },
            { $set: { firstname: req.body.firstname } }
        )
        res.json(updatedPost)
    } catch (err) {
        res.json({ message: err });
    }
})
//Delete a post
router.delete('/crud/:postID',async (req,res)=>{
    try{
        const removePost=await Crud.remove({_id:req.params.postID})
        res.json(removePost)
    }catch(err){
        res.json({message:err})
    }
})
module.exports = router;
