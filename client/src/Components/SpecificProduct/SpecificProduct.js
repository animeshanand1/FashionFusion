import React, { useState } from 'react'
import styles from './specificProduct.module.css'
function SpecificProduct() {
    const [mainImageSrc, setMainImageSrc] = useState("https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww");

    const handleThumbnailClick = (event) => {
        const thumbnailSrc = event.target.getAttribute('src');
        setMainImageSrc(thumbnailSrc);
        event.target.setAttribute('src', mainImageSrc);
    };
    return (
        <main className={styles["product-page"]}>
            <div className={styles["image-gallery"]}>
                <div className={styles["thumbnails"]}>
                    <img onClick={handleThumbnailClick} src="https://images.unsplash.com/photo-1628102160424-5f4ab3404829?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3Dg" alt="Thumbnail 1" className={styles["thumbnail"]} data-fullimage="image1.jpg" />
                    <img onClick={handleThumbnailClick} src="https://images.unsplash.com/photo-1627292441194-0280c19e74e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3Dg" alt="Thumbnail 2" className={styles["thumbnail"]} data-fullimage="image2.jpg" />
                    <img onClick={handleThumbnailClick} src="https://images.unsplash.com/photo-1619785292559-a15caa28bde6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww" alt="Thumbnail 3" className={styles["thumbnail"]} data-fullimage="image3.jpg" />
                </div>
                <div className={styles["main-image"]}>
                    <img
                        src={mainImageSrc}
                        alt="Main Image"
                        className={styles["full-image"]}
                    />
                </div>
            </div>

            <div className={styles["product-details"]}>
                <div className={styles["product-title"]}>Plaid Sleeve Kangaroo Pocket Drawstring Hoodie</div>
                <div className={styles["brand-info"]}>
                    <span className={styles["brand-label"]}>by</span>
                    <span className={styles["brand-name"]}>Cosmo Fashion</span>
                </div>
                <div className={styles["price-and-discount"]}>
                    <div className={styles["price-info"]}>
                        <div className={styles["currency-symbol"]} style={{color:'orange'}}>&#x20B9;</div>
                        <div className={styles["price-value"]}>1199</div>
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
                    <img className={styles["add-to-cart-button"]} src='/assets/images/bag-shopping-svgrepo-com.svg'/>
                </div>
            </div>

        </main>
    )
}

export default SpecificProduct


