const express = require('express');
const router = express.Router()

const User = require('../models/User');

// validation
const Joi = require('joi')

const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),

    password: Joi.string().min(6).required(),

}
)

router.post('/register', (req, res) => {

    // validate data before making a Userd


    const { error, value } = schema.validate(req.body)
    res.send(error.details[0].message)
    // const User =new User(req.body)
    // User.save()
    // .then(result=>res.send(result))
    // .catch(err=>res.status(404).send(err))
})


module.exports = router