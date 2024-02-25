const mongoose=require('mongoose')
const User = require('../model/userSchema')

const getUserById=async(req,res)=>{
    try {
        const {id}=req.params
        const userDetails=await User.findById(id)
        res.status(200).json({ message: 'Success fetched data ' ,userDetails})
    } catch (error) {
        res.status(500).json({ message: 'Error occurred' })
    }
}
module.exports={getUserById}