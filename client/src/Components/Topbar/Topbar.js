import React from 'react'
import styles from './topbar.module.css'
import { Link } from 'react-router-dom'
function Topbar() {
  
  return (
    <header className={styles.navbar}>
    <div className={styles["navbar-section"]}>
      <div className={styles["navbar-logo"]}>
        <div className={styles["navbar-home"]}>HOME</div>
        <img
          loading="lazy"
          src="/assets/images/account-avatar-man-svgrepo-com.svg"
          className={styles["navbar-logo-img"]}
        />
      </div>
      <div className={styles["navbar-category"]}>CATEGORY</div>
      <div className={styles["navbar-featured"]}>FEATURED</div>
      <div className={styles["navbar-new-arrivals"]}>NEW ARRIVALS</div>
     
    </div>
    <div className={styles["navbar-search"]}>
      <input type='text' className={styles["navbar-search-title"]} placeholder='search'/>
      <img
        loading="lazy"
        src="/assets/images/account-avatar-man-svgrepo-com.svg"
        className={styles["navbar-account"]}
      />
    </div>
  </header>
  
  )
}

export default Topbar