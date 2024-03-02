
const express=require('express')
const { getLogin, registerAdmin } = require("../model/controllers/authorization");
const router = express.Router();

router.post('/login',getLogin)
router.post('/register',registerAdmin)
module.exports=router
