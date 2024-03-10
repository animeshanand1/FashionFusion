const mongoose = require('mongoose')
const Product = require('../model/productSchema')

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        return res.status(200).json({ message: 'Fetched successfully', products })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Error Occurred' })
    }
}

const addProduct = async (req, res) => {
    try {
        const {productId,productName, brand,category,description,price,currency,sizes,colors,images,tags,availability,inventory} = req.body;

        const newProduct = new Product({productId,productName, brand,category,description,price,currency,sizes,colors,images,tags,availability,inventory});
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error occurred while adding product' });
    }
}
module.exports = { getAllProducts, addProduct }