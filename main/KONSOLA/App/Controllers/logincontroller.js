const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const Joi = require('joi');
const config = require('config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var {
    User
} = require('../Models/users')
router.post('/',jsonParser, async (req, res) => {
    
    if (!config.get('PrivateKey')) {
        console.error('FATAL ERROR: PrivateKey is not defined.')
        process.exit(1)
    }
    console.log(req.body);
    const { error } = validate(req.body);
    
    if (error) {
        return res.status(400).send({error: "Bad data"});
    }
    console.log(req.body);
    var user = await User.findOne({email: req.body.email})

    if(!user){
        return res.send({error: "User Not Found"})
    }

    var pass = await bcrypt.compare(req.body.password, user.password)
    if(pass){
        
        const token = jwt.sign({ id: user._id }, config.get('PrivateKey'), {expiresIn: '60d' })
        const filter = {
            _id: user._id
        }
        const update = {
            token: token
        }
        const result = await User.updateOne(filter, update)
        return res.header('x-auth-token', token).send({response: "User Logged In", email: user.email, token: token})
    }else{
        return res.send({error: "Bad password"})
    }

});

function validate(req){
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });
    const validation = schema.validate(req);
    return validation;
}

module.exports = router;