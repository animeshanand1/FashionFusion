
const express=require('express');
const { userLogin, userSignup } = require('../controllers/authController');
const router = express.Router();

router.post('/login',userLogin)
router.post('/register',userSignup)
module.exports=router