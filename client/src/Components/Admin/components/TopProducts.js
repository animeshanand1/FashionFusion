import React from 'react'

function TopProducts() {
  return (
    <div className={styles["product-highlight-container"]}>
    <p className={styles["performance-overview-text-style"]}>Top products</p>
    <div className={styles["product-card-list"]}>
      <div className={styles["product-card"]}>
        <p className={styles["product-info-card1"]}>Sneakers</p>
        <p className={styles["product-info-card1"]}>7441,05</p>
      </div>
      <div className={styles["product-info-container2"]}>
        <p className={styles["product-info-card1"]}>Dresses</p>
        <p className={styles["product-info-card1"]}>687,14</p>
      </div>
      <div className={styles["flexbox-container-with-gap"]}>
        <p className={styles["product-info-card1"]}>shirts</p>
        <p className={styles["product-info-card1"]}>486,46</p>
      </div>
      <div className={styles["flex-column-with-gap"]}>
        <p className={styles["product-info-card1"]}>Jeans</p>
        <p className={styles["product-info-card1"]}>324,10</p>
      </div>
      <div className={styles["product-info-row"]}>
        <p className={styles["product-info-card1"]}>Hats</p>
        <p className={styles["product-info-card1"]}>169,27</p>
      </div>
      <div className={styles["product-info-container"]}>
        <p className={styles["product-info-card1"]}>Accessories</p>
        <p className={styles["product-info-card1"]}>135,46</p>
      </div>
    </div>
  </div>
  )
}

export default TopProducts