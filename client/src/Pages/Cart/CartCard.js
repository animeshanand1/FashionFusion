import React from "react";
import styles from "./cartCard.module.css";

function CartCard({category,price,quantity,description}) {
  return (
    <div className={styles.savedCart}>
      <div className={styles[""]}>
        <div className={styles["cart-box"]}>
          <div className={styles["box-deatils"]}>
            <img loading="lazy" className={styles["box-item-img"]} />
            <div className={styles["box-item-description"]}>
              <div className={styles["item-name"]}>{category}</div>
              <div className={styles["box-item-addOn"]}>{description}</div>
            </div>
          </div>
          <div className={styles["ordered-pcs-details"]}>
            <div className={styles["ordered-pcs-num"]}>{quantity}</div>
            <img loading="lazy" />
          </div>
          <div className={styles["ordered-summary"]}>
            <div className={styles["div-price"]}>{price}</div>
            <img loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
