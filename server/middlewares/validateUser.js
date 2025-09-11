const Joi = require('joi');
const loginValidation = (req, res, next) => {
    const schema=Joi.object({
        regId:Joi.number().min(3).max(30).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        role:Joi.string().required(),
    })
    const {error}=schema.validate(req.body);
    if(error){
        return res.status(400).json({
            message:"Bad Request",error
        })
    }
    next();
}

const signupValidation = (req, res, next) => {next();}

module.exports={loginValidation,signupValidation};