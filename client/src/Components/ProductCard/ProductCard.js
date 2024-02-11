import React from 'react'
import styles from './card.module.css'
function ProductCard() {
  return (
    <>
    <div className={styles["main-card-container"]}>
        <div className={styles["divelementor-element1"]}>
          <div className={styles.before}></div>
          <div className={styles["divelementor-image-box-conten"]}>
            <b className={styles["heading-3"]}>20% Off On Tank Tops</b>
            <div className={styles["lorem-ipsum-dolor-container"]}>
              <span className={styles["lorem-ipsum-dolor-container1"]}>
                <p className={styles["lorem-ipsum-dolor"]}>Lorem ipsum dolor sit amet,</p>
                <p className={styles["lorem-ipsum-dolor"]}>
                  consectetur adipiscing elit. Proin ac
                </p>
                <p className={styles["lorem-ipsum-dolor"]}>dictum.</p>
              </span>
            </div>
          </div>
          <div className={styles["divelementor-button-wrapper"]}>
            <div className={styles.link}>
              <b className={styles["shop-now"]}>Shop Now</b>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default ProductCard