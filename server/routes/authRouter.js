const router = require('express').Router();
const {loginValidation,signupValidation} = require('../middlewares/validateUser');
const {login} = require('../controllers/authController');

router.post('/login',loginValidation,login);



module.exports=router;