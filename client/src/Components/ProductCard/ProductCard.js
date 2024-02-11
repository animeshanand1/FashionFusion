import React from 'react'
import styles from './card.module.css'
function ProductCard({ productTitle, tagLine, price, backgroundImageUrl }) {
  return (
    <section className={styles["divelementor-element1"]} style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className={styles["divelementor-image-box-conten"]}>
        <b className={styles["heading-32"]}>{productTitle}</b>
        <div className={styles["lorem-ipsum-dolor-container"]}>
          <span className={styles["lorem-ipsum-dolor-container1"]}>
            <p className={styles["lorem-ipsum-dolor"]}>{tagLine}</p>
            <p className={styles["lorem-ipsum-dolor"]}>{price}</p>
          </span>
        </div>
      </div>
      <div className={styles["divelementor-button-wrapper"]}>
        <div className={styles.link2}>
          <div className={styles["check-out"]}>Check Out</div>
        </div>
      </div>
    </section>
  );
}

export default ProductCard