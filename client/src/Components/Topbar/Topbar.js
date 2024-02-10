import React from 'react'
import styles from './topbar.module.css'
function Topbar() {
  return (
    <header className={styles.topbar}>
      <div className={styles["link-frame"]}>
        <div className={styles.logo}>
          <img src='/assests/images/logo.svg' alt='logo' height='50px' width='40px'/>
        </div>
        <ul className={styles["about-link"]}>
          <li className={styles["nav-link"]}>Home</li>
          <li className={styles["nav-link"]}>All Products</li>
          <li className={styles["nav-link"]}>About</li>
          <li className={styles["nav-link"]}>Contact</li>
          <li className={styles["account-link"]}> Account </li>
        </ul>        
        <div className={styles["link-view-frame"]}>
          <div className={styles.cart}>
            <img
              className={styles["link-view-shopping-cart-emp"]}
              loading="eager"
              alt=""
              src='/assests/images/bag.svg' height='20px' width='20px'/>
            <div className={styles["link-view-shopping-cart-number"]}>
              <b className={styles["cart-frame"]}>0</b>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar