const mongoose=require('mongoose')
const Product = require('../model/productSchema')

const getAllProducts=async(req,res)=>{
    try {
        const products=await Product.find()
        return res.status(200).json({message:'Fetched successfully',products})
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:'Error Occurred'})
    }
}
module.exports={getAllProducts}