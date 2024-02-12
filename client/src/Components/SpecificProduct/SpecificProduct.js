import React from 'react'
import styles from './specificProduct.module.css'
function SpecificProduct() {
    return (
        <main>
            <section className={styles["product-container"]}>
                <div className={styles["product-image"]}>
                </div>
                <div className={styles["product-details"]}>
                    <h2>Product Name</h2>
                    <p className={styles.price}>Price</p>
                    <p className={styles.description}>Product description goes here...</p>
                </div>
            </section>
        </main>
    )
}

export default SpecificProduct


