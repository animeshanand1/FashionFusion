const mongoose=require('mongoose')
const Admin = require('../schema/adminSchema')

const getLogin=async(req,res)=>{
    const isAdmin=await Admin.findOne({email})
    if (!isAdmin){
        console.log('action not allowed');
    }
    try {
        res.status(200).json({message:'Logged In'})
    } catch (error) {
        res.status(500).json({message:'Something went wrong'})
    }
}
module.exports={getLogin}