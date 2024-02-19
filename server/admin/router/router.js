
const express=require('express')
const { getLogin } = require("../model/controllers/authorization");
const adminRouter = express.Router();
adminRouter.use('/login', getLogin);
module.exports=adminRouter