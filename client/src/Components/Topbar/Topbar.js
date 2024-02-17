import React from 'react'
import styles from './topbar.module.css'
import { Link } from 'react-router-dom'
function Topbar() {
  
  return (
    <header className={styles.topbar}>
      <div className={styles["link-frame"]}>
        <div className={styles.logo}>
          <img src='/assets/images/logo.svg' alt='logo' height='50px' width='40px'/>
        </div>
        <ul className={styles["about-link"]}>
          <Link className={styles["nav-link"]}>Home</Link>
          <Link className={styles["nav-link"]}>All Products</Link>
          <Link className={styles["nav-link"]}>About</Link>
          <Link className={styles["nav-link"]}>Contact</Link>
          <Link className={styles["account-link"]} to='/account/login'> Account </Link>
        </ul>        
        <div className={styles["link-view-frame"]}>
          <div className={styles.cart}>
            <img
              className={styles["link-view-shopping-cart-emp"]}
              loading="eager"
              alt=""
              src='/assets/images/bag.svg' height='20px' width='20px'/>
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