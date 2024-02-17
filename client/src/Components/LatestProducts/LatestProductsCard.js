import React from 'react'
import styles from './latestproduct.module.css'

function LatestProductsCard({productPrice,productDescription,productName,productImg}) {
  return (
   
    <section className={styles["latest-products"]}>
     
    <div className={styles["product-wrapper"]}>
      <div className={styles["product-column"]}>
        <div className={styles["product-details"]}>
          <img loading="lazy" className={styles["product-image"]} src={productImg} />
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
