const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const Admin = require('../schema/adminSchema')

const getLogin=async(req,res)=>{
    try {
        const { email,password } = req.body;
        const isAdmin = await Admin.findOne({ email });
        if (!isAdmin) {
            console.log('Action not allowed');
            return res.status(401).json({ message: 'Action not allowed' });
        }
        else{
            const matchedPassword=await bcrypt.compare(password,isAdmin.password)
            if(matchedPassword){

               return res.status(200).json({ message: 'Logged In' });
            }
            res.status(509).json({ message: 'Something went wrong incorrect pswd' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}


const registerAdmin=async(req,res)=>{
    const {email,password}=req.body;
    try {
        const hashedPassword=await bcrypt.hash(password,10)
        const admin=await Admin.create({
            password:hashedPassword,
            email:email,
            role:'admin'
        })
        await admin.save()
        res.status(201).json({message:'admin created successfully'})
    } catch (error) {
        console.error(error)
        res.status(400).json({message:'eroor'})
    }
}
module.exports={getLogin,registerAdmin}