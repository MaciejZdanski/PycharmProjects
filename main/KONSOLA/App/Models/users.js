const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    }
}))
 
function validateUser(user) {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        token: Joi.string().required()
    })
    const validation = schema.validate(user)
    return validation
}
 
exports.User = User
exports.validate = validateUser
