
const express=require('express');
const { userLogin, userSignup, updateUser } = require('../controllers/authController');
const router = express.Router();

router.post('/login',userLogin)
router.post('/register',userSignup)
router.post('/updateAccount/:id',updateUser)
module.exports=router