import React from 'react'
import styles from './cartCard.module.css'

function CartCard() {
  return (
    <div className={styles.column}>
      <div className={styles["div-3"]}>
        <div className={styles["div-4"]}>
          <img
            loading="lazy"
            className={styles.img}
          />
          <div className={styles["div-5"]}>Shopping Continue</div>
        </div>
        <div className={styles["div-6"]}>
          <div className={styles["div-8"]}>Shopping cart</div>
          <div className={styles["div-9"]}>You have 3 item in your cart</div>
          <div className={styles["div-10"]}>
            <div className={styles["div-11"]}>
              <img
                loading="lazy"
                className={styles["img-2"]}
              />
              <div className={styles["div-12"]}>
                <div className={styles["div-13"]}>Italy Pizza</div>
                <div className={styles["div-14"]}>Extra cheese and toping</div>
              </div>
            </div>
            <div className={styles["div-15"]}>
              <div className={styles["div-16"]}>1</div>
              <img
                loading="lazy"
                className={styles["img-3"]}
              />
            </div>
            <div className={styles["div-17"]}>
              <div className={styles["div-18"]}>$681</div>
              <img
                loading="lazy"
                className={styles["img-4"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartCard