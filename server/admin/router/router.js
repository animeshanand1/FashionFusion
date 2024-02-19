
const express=require('express')
const { getLogin } = require("../model/controllers/authorization");
const router = express.Router();

router.post('/login',getLogin)
module.exports=router