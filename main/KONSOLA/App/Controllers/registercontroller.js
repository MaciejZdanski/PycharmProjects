const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const { User } = require('../Models/users')
const _ = require('lodash')
const Joi = require('joi')
const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcrypt')
const salt = 10

router.post('/',jsonParser, async (req, res) => {
    if (!config.get('PrivateKey')) {
        console.error('FATAL ERROR: PrivateKey is not defined.')
        process.exit(1)
    }
    console.log(req.body)
    const { error } = validate(req.body)
    if (error) {
        return res.status(400).send({error: "Bad data"})
    }

    var user = await User.findOne({email: req.body.email})
    if(user){
        return res.send({error: "User Found"})
    }

    var pass = await bcrypt.hash(req.body.password, salt)
    const token = jwt.sign({ pk: config.get('PrivateKey') }, config.get('PrivateKey'), {expiresIn: '60d' })
    
    try{
        user = new User(_.pick({
            email: req.body.email,
            password: pass, 
            token: token
        }, ['email', 'password',  'token']))
        await user.save()
        return res.send({response: "User Created", email: user.email, token: token})
    }catch(e){
        return res.send({error: "Something went wrong", errorDesc: e})
    }
})

var validate = (req) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    })
    const validation = schema.validate(req)
    return validation
}
module.exports = router