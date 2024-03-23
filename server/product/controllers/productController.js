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
        const { productId, productName, productCategory,productImage, price, productDescription } = req.body;
        console.log('Received productId:', productId);
        const newProduct = new Product({
            productId: productId,
            productCategory: productCategory,
            productImage: productImage,
            productName: productName,
            price: price,
            productDescription: productDescription
        });

        const savedProduct = await newProduct.save();
        return res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error occurred while adding product' });
    }
};

module.exports = addProduct;


module.exports = { getAllProducts, addProduct }