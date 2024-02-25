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
        const { firstName, lastName, password, email, confirmPassword, phone } = req.body;
        if (phone.toString().length !== 10) {
            return res.status(401).json({ message: 'Invalid Phone Number' });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ firstName, lastName, password: hashedPassword, email, phone });

        res.status(201).json({ message: 'Account created successfully', newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};


const updateUser=async(req,res)=>{
    try {
        const {id}=req.params
        const {name}=req.body
        const {photo}=req.body
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