import React from 'react'
import styles from './cartCard.module.css'

function CartCard() {
  return (
    <div className={styles.savedCart}>
      <div className={styles[""]}>
        <div className={styles["cart-box"]}>
          <div className={styles["box-deatils"]}>
            <img
              loading="lazy"
              className={styles["box-item-img"]}
            />
            <div className={styles["box-item-description"]}>
              <div className={styles["item-name"]}>Italy Pizza</div>
              <div className={styles["box-item-addOn"]}>Extra cheese and toping</div>
            </div>
          </div>
          <div className={styles["ordered-pcs-details"]}>
            <div className={styles["ordered-pcs-num"]}>1</div>
            <img
              loading="lazy"
            />
          </div>
          <div className={styles["ordered-summary"]}>
            <div className={styles["div-price"]}>$681</div>
            <img
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartCard