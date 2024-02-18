import React from 'react'
import styles from './specificProduct.module.css'
function SpecificProduct() {
    return (
        <main classNameName={styles["product-page"]}>
           
            <div className={styles["product-details"]}>
                <div className={styles["product-title"]}>Plaid Sleeve Kangaroo Pocket Drawstring Hoodie</div>
                <div className={styles["brand-info"]}>
                    <span className={styles["brand-label"]}>by</span>
                    <span className={styles["brand-name"]}>Cosmo Fashion</span>
                </div>
                <div className={styles["price-and-discount"]}>
                    <div className={styles["price-info"]}>
                        <div className={styles["currency-symbol"]}>$</div>
                        <div className={styles["price-value"]}>67</div>
                    </div>
                    <div className={styles["discount-info"]}>
                        <span className={styles["discount-label"]}>Save 25%</span>
                        <br />
                        <span className={styles["discount-description"]}>Inclusive deal of the day</span>
                    </div>
                </div>
                <div className={styles["product-description"]}>
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout.
                </div>
                <div className={styles["add-to-cart"]}>
                    <div className={styles.quantity}>
                        <div className={styles["quantity-label"]}>qty</div>
                        <div className={styles["quantity-value"]}>2</div>
                        <img loading="lazy" srcset="..." className={styles["quantity-image"]} />
                    </div>
                    <div className={styles["add-to-cart-button"]}>Add to Cart</div>
                </div>
            </div>

        </main>
    )
}

export default SpecificProduct


