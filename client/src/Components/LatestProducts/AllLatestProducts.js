import React, { useEffect, useState } from 'react'
import LatestProductsCard from './LatestProductsCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../../redux/slices/productSlice'
import { addToCart } from '../../redux/slices/cartSlice';
function AllLatestProducts() {
    const { products, loading,error } = useSelector((state) => state.product);
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    if (loading) {
        return <h2>Loading...</h2>;
    }
    if (error) {
        return <h2>Error: {error}</h2>;
    } 

   
    
    return (
        <>
            <h2>View Latest</h2>
            <button style={{ float: 'right', marginTop: '-2rem', marginRight: '1.5rem', background: 'blue', border: 'none', color: 'white', padding: '10px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '0.8rem', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', transition: 'background 0.3s' }}>View All</button>
            <section className='latest-product-card container' style={{
                display: 'grid',
                backgroundColor: '#b4712',
                gridTemplateColumns: 'repeat(3, 1fr)',
                width: '',
                padding: "1rem"
            }}> 
            {products.map((product) => (
            <LatestProductsCard productId={product._id} 
            productName={product.productName}
            productDescription={product.productDescription}
            productPrice={product.price}
            productImg={product.productImage}
            productCategory={product.productCategory}
            />))}
                
            </section>
        </>
    )
}

export default AllLatestProducts