const mongoose=require('mongoose')
const Admin = require('../schema/adminSchema')

const getLogin=async(req,res)=>{
    try {
        const { email } = req.body;
        const isAdmin = await Admin.findOne({ email });
        if (!isAdmin) {
            console.log('Action not allowed');
            return res.status(401).json({ message: 'Action not allowed' });
        }
        res.status(200).json({ message: 'Logged In' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}


const registerAdmin=async(req,res)=>{
    
}
module.exports={getLogin}