
const express=require('express');
const { userLogin, userSignup, updateUser } = require('../controllers/authController');
const { getUserById } = require('../controllers/getUserController');
const router = express.Router();

router.post('/login',userLogin)
router.post('/register',userSignup)
router.post('/updateAccount/:id',updateUser)
router.get('/fetch-user/:id',getUserById)
module.exports=router