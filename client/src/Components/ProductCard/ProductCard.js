import React from 'react'
import styles from './card.module.css'
function ProductCard({productTitle,imgSrc,tagLine,price}) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.outer}>
          <div className={styles.content}>
            <span className={styles.bg}>EXCLUSIVE</span>
            <h1>{productTitle}</h1>
            <p>{tagLine}</p>
            <div className={styles.button}>
              <p>{price}INR</p><a className={styles["cart-btn"]} href="#"><i className={styles["cart-icon ion-bag"]}></i>ADD TO CART</a>
            </div>
          </div>
          <img src={imgSrc} width="300px" className={styles.animated}/>
        </div>
      </div>
    </>
  )
}

export default ProductCard