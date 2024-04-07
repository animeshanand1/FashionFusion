import React, { useEffect, useState } from 'react'
import styles from './latestproduct.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'

function LatestProductsCard({ productPrice,productCategory ,productDescription, productName, productImg, productId}) {
  
  const dispatch = useDispatch();
    return (
    <section className={styles["latest-products"]}>
      <div className={styles["product-wrapper"]}>
        <div className={styles["product-column"]}>
          <div className={styles["product-details"]} style={{ position: 'relative' }}>
            <img loading="lazy" className={styles["product-image"]} src={productImg} />
            <div style={{ position: 'absolute', top: 0, right: 0, zIndex: '222', padding: '10px', cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" onClick={() =>dispatch(addToCart({id: productId, name: productName, price: productPrice,description:productDescription,category:productCategory,image:productImg }))}>
                <circle cx="12" cy="12" r="12" fill="white" />
                <path d="M19 7h-2V6c0-2.76-2.24-5-5-5S7 3.24 7 6v1H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2h14.02c1.1 0 1.99-.9 1.99-2l-.01-9c0-1.1-.89-2-1.99-2zm-7-5c1.66 0 3 1.34 3 3v1H9V5c0-1.66 1.34-3 3-3zm1 14h-2v-2h2v2zm3-6H8v-1c0-2.21 1.79-4 4-4s4 1.79 4 4v1z" />
              </svg>
            </div>
            <div className={styles["product-name"]}>{productName}</div>
            <div className={styles["product-description"]}>{productDescription}</div>
            <div className={styles["product-price"]}>{productPrice}&#8377;</div>
          </div>
        </div>
      </div>
    </section>


  )
}

export default LatestProductsCard
