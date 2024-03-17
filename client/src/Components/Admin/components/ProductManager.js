import React, { useState } from 'react';

function ProductManager() {
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ image, price, description });
  }
  return (
    <form>
      <div style={{ width: '30%', border: '1px solid',padding:'20px', marginTop: '5px', borderRadius: '10px', margin: '0 auto' }} id="form">
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="productName" style={{ display: 'block' }}>Product Name</label>
          <input type="text" style={{ width: '100%' }} id="productName" required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="price" style={{ display: 'block' }}>Price</label>
          <input type="text" style={{ width: '100%' }} id="price" required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="productCategory" style={{ display: 'block' }}>Product Category</label>
          <select name="productCategory" id="productCategory" style={{ width: '100%' }} required>
            <option></option>
            <option value="Tops">Tops</option>
            <option value="Bottoms">Bottoms</option>
            <option value="Dresses">Dresses</option>
          </select>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="productImage" style={{ display: 'block' }}>Product Image</label>
          <input type="file" name="productImage" id="productImage" style={{ width: '100%' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="submit" style={{ width: '50%', margin: '10px', backgroundColor: 'green', color: 'white', borderRadius: '5px', padding: '10px' }} id="addStockButton">Add Stock</button>
        </div>
      </div>
    </form>
  );
}
export default ProductManager;
