import React from 'react'
import styles from './mycart.module.css'
import CartCard from './CartCard'

function Mycart() {
    return (
        <>
            <div className={styles.cartMain}>
                <div className={styles["summary-wrapper"]}>
                    <div className={styles['cart-component']}>
                        <CartCard />
                        <CartCard />
                        <CartCard />
                    </div>
                    <div className={styles["payment-card-container"]}>
                        <form className={styles["card-background"]}>
                            <div className={styles["card-detail-tag"]}>Card Details</div>
                            <div>
                                <div className={styles["card-detailed-info"]}>
                                    <label className={styles["card-name-label"]}>Name on card</label>
                                    <input type='text' className={styles["card-name-input"]} placeholder='Your Name' />
                                    <label className={styles["card-num-label"]}>Card Number</label>
                                    <input className={styles["card-num-input"]} placeholder='1111 2222 3333 4444' />
                                </div>
                                <div className={styles["card-validity"]}>
                                    <div className={styles["card-exp"]}>
                                        <label className={styles["exp-label"]}>Expiration date</label>
                                        <input className={styles["exp-input"]} placeholder='mm/yy' />
                                    </div>
                                    <div className={styles["card-cvv"]}>
                                        <label className={styles["cvv-label"]}>CVV</label>
                                        <input className={styles["cvv-input"]} placeholder='cvv' />
                                    </div>
                                </div>
                                <div className={styles["separator-line"]}></div>
                                <div className={styles["checkout-info"]}>
                                    <div className={styles["price-label-col"]}>
                                        <div>Subtotal</div>
                                        <div>Shipping</div>
                                        <div>Total (Tax incl.)</div>
                                    </div>
                                    <div className={styles["price-amount-col"]}>
                                        <div>$1,668</div>
                                        <div>$4</div>
                                        <div>$1,672</div>
                                    </div>
                                </div>
                                <div className={styles["checkout-container"]}>
                                    <div className={styles["checkout-total"]}>$1,672</div>
                                    <div className={styles["checkout-total"]}>Checkout</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div></>
    )
}

export default Mycart