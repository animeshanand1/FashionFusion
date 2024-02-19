const mongoose  = require("mongoose");

const adminSchema=new mongoose.Schema({
   
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['admin'],
        default: 'admin'
    }
})
const Admin=mongoose.model('Admin',adminSchema)
module.exports=Admin