const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true
  },
  productName: {
    type: String,
    required: true
  },
  productCategory: {
    type: String,
    required: true
  },
  productDescription: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  productImage: [{
    type: String
  }]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
