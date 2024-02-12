import React from 'react'
import styles from './specificProduct.module.css'
function SpecificProduct() {
    return (
        <main>
            <section className={styles["product-container"]}>
                <div className={styles["product-image"]}>
                    <img src='assests/images/undefined_image (32).png'/>
                </div>
                <div className={styles["product-details"]}>
                    <h2>Product Name</h2>
                    <p className={styles.price}>Price</p>
                    <p className={styles.description}> Introducing our stunning silver sequinned romper, 
                    designed to make you shine at any occasion. This eye-catching outfit features a flattering 
                    fit and dazzling sequins that catch the light with every move. The romper is crafted 
                    with high-quality materials to ensure both comfort and style. Whether you're attending a 
                    party, a night out with friends, or a special event, this romper will make you the 
                    center of attention. Embrace your inner sparkle and step into the spotlight with our 
                    fabulous silver sequinned romper.</p>
                </div>
            </section>
        </main>
    )
}

export default SpecificProduct


