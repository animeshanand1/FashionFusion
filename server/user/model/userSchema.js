const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    confirmPassword:{
        type: String,
    },
    photo:{
        type:String
    }
})

const User=mongoose.model('User',userSchema)
module.exports=User