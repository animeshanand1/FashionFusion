import React, { useState } from 'react';
import axios from 'axios';
function ProductManager() {
 const [formData,setFormData] = useState({productId:'1',productName:'22',productDescription:'csd',price:'21',productCategory:'',productImage:null})
 const handleInput = (e) => {
  const { name, value, files } = e.target;
  if (name === 'productImage') {
    setFormData({ ...formData, [name]: files[0] });
  } else {
    setFormData({ ...formData, [name]: value });
  }
};

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post('http://localhost:5000/product/add-product', formData);
    console.log(response.data); // Check the response data
  } catch (error) {
    console.error(error);
    alert('Failed');
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ width: '30%', border: '1px solid',padding:'20px', marginTop: '5px', borderRadius: '10px', margin: '0 auto' }} id="form">
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="productId" style={{ display: 'block' }}>Product ID</label>
          <input type="text" name='productId' style={{ width: '100%' }} id="productId" required value={formData.productId} onChange={handleInput} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="productName" style={{ display: 'block' }}>Product Name</label>
          <input type="text" name='productName' style={{ width: '100%' }} id="productName" required value={formData.productName} onChange={handleInput} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="price" style={{ display: 'block' }}>Price</label>
          <input type="text" name='price' style={{ width: '100%' }} id="price" required value={formData.price} onChange={handleInput} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="productDescription" style={{ display: 'block' }}>Product Description</label>
          <textarea style={{ width: '100%' }} name='productDescription' id="productDescription" required value={formData.productDescription} onChange={handleInput} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="productCategory" style={{ display: 'block' }}>Product Category</label>
          <select name="productCategory" id="productCategory" style={{ width: '100%' }} required value={formData.productCategory} onChange={handleInput}>
            <option></option>
            <option value="Tops">Tops</option>
            <option value="Bottoms">Bottoms</option>
            <option value="Dresses">Dresses</option>
          </select>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="productImage" style={{ display: 'block' }}>Product Image</label>
          <input type="file" name="productImage" id="productImage" style={{ width: '100%' }} onChange={handleInput} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="submit" style={{ width: '50%', margin: '10px', backgroundColor: 'green', color: 'white', borderRadius: '5px', padding: '10px' }} id="addStockButton">Add Stock</button>
        </div>
      </div>
    </form>
  );
}
export default ProductManager;
