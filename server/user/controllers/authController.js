const mongoose = require('mongoose')
const User = require('../model/userSchema')
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;


const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const isUser = await User.findOne({ email })
        if (!isUser) {
            return res.status(401).json({ message: 'Kindly register first' });
        }
        const matchedPassword=await bcrypt.compare(password,isUser.password)
        if(matchedPassword){
            const token = jwt.sign({ userId: isUser._id }, 'secret1212', { expiresIn: '1h' });
            return res.status(200).json({ message: 'Signed In',token })
        }
        return res.status(401).json({ message: 'Bad Credentials' });
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

const userSignup = async (req, res) => {
    try {
        const { name, password, email } = req.body
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const hashedPassword=await bcrypt.hash(password,10)
        const newUser = await User.create({name,password:hashedPassword,email})

        res.status(201).json({ message: 'created account', newUser })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Something went wrong' })
    }
}

const updateUser=async(req,res)=>{
    try {
        const {id}=req.params
        const {name}=req.body
        const user=await User.findById(id)
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        user.name =name;
        await user.save();
        return res.status(201).json({ message: 'User updated successfully', User });
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Something went wrong' })
    }
}
module.exports = { userLogin, userSignup,updateUser }