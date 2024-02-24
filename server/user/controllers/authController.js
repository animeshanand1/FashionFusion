const mongoose = require('mongoose')
const User = require('../model/userSchema')
const bcrypt=require('bcrypt')

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const isUser = await User.findOne({ email })
        if (!isUser) {
            res.send('Kindly register first')
        }
        else {
            if (password === isUser.password) {

                res.status(200).json({ message: 'Successfully Signed In' })
            }
            res.status(401).json({ message: 'Bad Credentials' })

        }
    } catch (error) {
        console.error(error)
        res.status(401).json({ message: 'Something went wrong' })
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
module.exports = { userLogin, userSignup }