import React from 'react'
import styles from '../dashboard.module.css'


function ProductList({ productName, productInfo, buttonText, buttonClassName, placeholderText, percentage }) {
    return (
        
        <div className={styles["product-card-container"]}>
            <p className={styles["product-info-card1"]}>{productName}</p>
            {buttonText && <button className={buttonClassName}>{buttonText}</button>}
            {placeholderText &&
                <div className={styles["product-details-container"]}>
                    <input placeholder={placeholderText} type="text" className={styles["input-container2 input-style-f62::placeholder"]} />
                </div>
            }
            <p className={styles["product-info-card1"]}>{productInfo}</p>
            <div className={styles["center-details-with-percentage"]}>
                <div className={styles["detail-container"]}>
                    <p className={styles["product-info-card1"]}>Details</p>
                </div>
                <p className={styles["percentage-highlight"]}>{percentage}</p>
            </div>
        </div>
    )
}

export default ProductList