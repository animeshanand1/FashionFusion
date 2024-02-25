import React from 'react'
import styles from './mycart.module.css'
import CartCard from './CartCard'

function Mycart() {
    return (
        <div className={styles.cartMain}>
            <div className={styles["div-2"]}>
              <CartCard/>
                <div className={styles["card-container"]}>
                    <div className={styles["div-37"]}>
                        <div className={styles["div-38"]}>
                            <div className={styles["div-39"]}>Card Details</div>
                            <img
                                loading="lazy"
                                srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/d15f1ce42f0483b2fa01a63b58b5cd620e8a7e063048241d83cb28bce2ce363f?apiKey=efcdc6923779477789211f52a6096958&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d15f1ce42f0483b2fa01a63b58b5cd620e8a7e063048241d83cb28bce2ce363f?apiKey=efcdc6923779477789211f52a6096958&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d15f1ce42f0483b2fa01a63b58b5cd620e8a7e063048241d83cb28bce2ce363f?apiKey=efcdc6923779477789211f52a6096958&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d15f1ce42f0483b2fa01a63b58b5cd620e8a7e063048241d83cb28bce2ce363f?apiKey=efcdc6923779477789211f52a6096958&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d15f1ce42f0483b2fa01a63b58b5cd620e8a7e063048241d83cb28bce2ce363f?apiKey=efcdc6923779477789211f52a6096958&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d15f1ce42f0483b2fa01a63b58b5cd620e8a7e063048241d83cb28bce2ce363f?apiKey=efcdc6923779477789211f52a6096958&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d15f1ce42f0483b2fa01a63b58b5cd620e8a7e063048241d83cb28bce2ce363f?apiKey=efcdc6923779477789211f52a6096958&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d15f1ce42f0483b2fa01a63b58b5cd620e8a7e063048241d83cb28bce2ce363f?apiKey=efcdc6923779477789211f52a6096958&"
                                className={styles["img-11"]}
                            />
                        </div>
                        <div className={styles["div-40"]}>Card type</div>
                        <div className={styles["div-41"]}>
                            <img
                                loading="lazy"
                                srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/c238a0cb523c9a72c2facb7502c4704b8edd0903c94c59b32dde46489ac1a857?apiKey=efcdc6923779477789211f52a6096958&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c238a0cb523c9a72c2facb7502c4704b8edd0903c94c59b32dde46489ac1a857?apiKey=efcdc6923779477789211f52a6096958&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c238a0cb523c9a72c2facb7502c4704b8edd0903c94c59b32dde46489ac1a857?apiKey=efcdc6923779477789211f52a6096958&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c238a0cb523c9a72c2facb7502c4704b8edd0903c94c59b32dde46489ac1a857?apiKey=efcdc6923779477789211f52a6096958&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c238a0cb523c9a72c2facb7502c4704b8edd0903c94c59b32dde46489ac1a857?apiKey=efcdc6923779477789211f52a6096958&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c238a0cb523c9a72c2facb7502c4704b8edd0903c94c59b32dde46489ac1a857?apiKey=efcdc6923779477789211f52a6096958&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c238a0cb523c9a72c2facb7502c4704b8edd0903c94c59b32dde46489ac1a857?apiKey=efcdc6923779477789211f52a6096958&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c238a0cb523c9a72c2facb7502c4704b8edd0903c94c59b32dde46489ac1a857?apiKey=efcdc6923779477789211f52a6096958&"
                                className={styles["img-12"]}
                            />
                            <img
                                loading="lazy"
                                srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/0a99af12fa4ec69aa7d128ccb943160167b4b6abfb4543ab4b335d78ec809336?apiKey=efcdc6923779477789211f52a6096958&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a99af12fa4ec69aa7d128ccb943160167b4b6abfb4543ab4b335d78ec809336?apiKey=efcdc6923779477789211f52a6096958&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a99af12fa4ec69aa7d128ccb943160167b4b6abfb4543ab4b335d78ec809336?apiKey=efcdc6923779477789211f52a6096958&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a99af12fa4ec69aa7d128ccb943160167b4b6abfb4543ab4b335d78ec809336?apiKey=efcdc6923779477789211f52a6096958&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a99af12fa4ec69aa7d128ccb943160167b4b6abfb4543ab4b335d78ec809336?apiKey=efcdc6923779477789211f52a6096958&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a99af12fa4ec69aa7d128ccb943160167b4b6abfb4543ab4b335d78ec809336?apiKey=efcdc6923779477789211f52a6096958&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a99af12fa4ec69aa7d128ccb943160167b4b6abfb4543ab4b335d78ec809336?apiKey=efcdc6923779477789211f52a6096958&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a99af12fa4ec69aa7d128ccb943160167b4b6abfb4543ab4b335d78ec809336?apiKey=efcdc6923779477789211f52a6096958&"
                                className={styles["img-13"]}
                            />
                            <img
                                loading="lazy"
                                srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/b956b29c70ee5e75ba10e1f18af2773e32b7f6b372c1dfb6aab26dea5960b3ae?apiKey=efcdc6923779477789211f52a6096958&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b956b29c70ee5e75ba10e1f18af2773e32b7f6b372c1dfb6aab26dea5960b3ae?apiKey=efcdc6923779477789211f52a6096958&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b956b29c70ee5e75ba10e1f18af2773e32b7f6b372c1dfb6aab26dea5960b3ae?apiKey=efcdc6923779477789211f52a6096958&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b956b29c70ee5e75ba10e1f18af2773e32b7f6b372c1dfb6aab26dea5960b3ae?apiKey=efcdc6923779477789211f52a6096958&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b956b29c70ee5e75ba10e1f18af2773e32b7f6b372c1dfb6aab26dea5960b3ae?apiKey=efcdc6923779477789211f52a6096958&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b956b29c70ee5e75ba10e1f18af2773e32b7f6b372c1dfb6aab26dea5960b3ae?apiKey=efcdc6923779477789211f52a6096958&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b956b29c70ee5e75ba10e1f18af2773e32b7f6b372c1dfb6aab26dea5960b3ae?apiKey=efcdc6923779477789211f52a6096958&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b956b29c70ee5e75ba10e1f18af2773e32b7f6b372c1dfb6aab26dea5960b3ae?apiKey=efcdc6923779477789211f52a6096958&"
                                className={styles["img-14"]}
                            />
                            <div className={styles["div-42"]}>See all</div>
                        </div>
                        <div className={styles["div-43"]}>Name on card</div>
                        <div className={styles["div-44"]}>Name</div>
                        <div className={styles["div-45"]}>Card Number</div>
                        <div className={styles["div-46"]}>1111 2222 3333 4444</div>
                        <div className={styles["div-47"]}>
                            <div className={styles["div-48"]}>
                                <div className={styles["div-49"]}>Expiration date</div>
                                <div className={styles["div-50"]}>mm/yy</div>
                            </div>
                            <div className={styles["div-51"]}>
                                <div className={styles["div-52"]}>CVV</div>
                                <div className={styles["div-53"]}>123</div>
                            </div>
                        </div>
                        <div className={styles["div-54"]}></div>
                        <div className={styles["div-55"]}>
                            <div className={styles["div-56"]}>
                                <div className={styles["div-57"]}>Subtotal</div>
                                <div className={styles["div-58"]}>Shipping</div>
                                <div className={styles["div-59"]}>Total (Tax incl.)</div>
                            </div>
                            <div className={styles["div-60"]}>
                                <div className={styles["div-61"]}>$1,668</div>
                                <div className={styles["div-62"]}>$4</div>
                                <div className={styles["div-63"]}>$1,672</div>
                            </div>
                        </div>
                        <div className={styles["div-64"]}>
                            <div className={styles["div-65"]}>$1,672</div>
                            <div className={styles["div-66"]}>
                                <div className={styles["div-67"]}>Checkout</div>
                                <img
                                    loading="lazy"
                                    srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/1f855e61bfe3c5919313eb60e4b974802542bc752d9bedf7c3b04e4a24fb378b?apiKey=efcdc6923779477789211f52a6096958&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f855e61bfe3c5919313eb60e4b974802542bc752d9bedf7c3b04e4a24fb378b?apiKey=efcdc6923779477789211f52a6096958&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f855e61bfe3c5919313eb60e4b974802542bc752d9bedf7c3b04e4a24fb378b?apiKey=efcdc6923779477789211f52a6096958&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f855e61bfe3c5919313eb60e4b974802542bc752d9bedf7c3b04e4a24fb378b?apiKey=efcdc6923779477789211f52a6096958&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f855e61bfe3c5919313eb60e4b974802542bc752d9bedf7c3b04e4a24fb378b?apiKey=efcdc6923779477789211f52a6096958&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f855e61bfe3c5919313eb60e4b974802542bc752d9bedf7c3b04e4a24fb378b?apiKey=efcdc6923779477789211f52a6096958&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f855e61bfe3c5919313eb60e4b974802542bc752d9bedf7c3b04e4a24fb378b?apiKey=efcdc6923779477789211f52a6096958&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f855e61bfe3c5919313eb60e4b974802542bc752d9bedf7c3b04e4a24fb378b?apiKey=efcdc6923779477789211f52a6096958&"
                                    className={styles["img-15"]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mycart