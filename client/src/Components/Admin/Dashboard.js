import React from 'react'
import styles from './dashboard.module.css'
import { Link } from 'react-router-dom'
function Dashboard() {
  return (
    <section className={styles.dashboard}>
      <div className={styles["dashboard-navbar"]}>
        <div className={styles["navbar-brand"]}>Welcome Admin</div>
        <div className={styles["navbar-controls"]}>
          <div className={styles["notification-icon"]}>
            <img style={{ width: '30px', height: 'auto', borderRadius: '50%' }} src="data:image/png;base64,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" alt="Notifications" />
            <span className={styles["notification-badge"]}>3</span>
          </div>
          <div className={styles["search-bar-container"]}>
            <input type="text" className={styles["search-bar"]} placeholder="Search..." />
          </div>
          <div className={styles["admin-pic-container"]}>
            <img src="data:image/jpeg;base64,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" alt="Admin" className={styles["admin-pic"]} />
          </div>
        </div>
      </div>
      <div className={styles["dashboard-wrapper"]}>
        <div className={styles['navLeft-menu']}>
          <p> Admin</p>
          <div className={styles['fashion-dash-container']}>
            <p className={styles['performance-overview-text-style']}>FashionDash</p>
            <div className={styles['main-content-container']}>
              <div className={styles['full-width-container']}>
                <div className={styles['full-width-container']}>
                  <div className={styles['header-container']}>
                    <img src="assets/img_1_19_33544d.png" alt="a black and white photo of a house on a white background." className={styles['image-with-text-overlay']} />
                    <p className={styles['home-link-text-style']}>Home</p>
                  </div>
                  <div className={styles['product-section-container']}>
                    <div className={styles['product-container']}>
                      <img src="assets/img_1_18_9f0ce1.png" alt="a close up of a black letter t on a white background." className={styles['product-image-display-style1']} />
                      <p className={styles['product-title-text-style']}>Products</p>
                    </div>
                    <img src="assets/img_1_22_d10a5d.png" alt="a black and white image of a triangle on a white background." className={styles['product-image-display-style']} />
                  </div>
                  <div className={styles['content-wrapper']}>
                    <p className={styles['theme-category-text-display-style']} className={styles['section-title-style']}>Overview</p>
                    <p className={styles['theme-category-text-display-style']} className={styles['section-title-style']}>List</p>
                    <p className={styles['theme-category-text-display-style']} className={styles['section-title-style']}>Scheduled</p>
                    <p className={styles['theme-category-text-display-style']} className={styles['section-title-style']}>Comments</p>
                  </div>
                </div>
                <div className={styles['financial-summary-container']}>
                  <div className={styles['revenue-section-container1']}>
                    <div className={styles['revenue-section-container']}>
                      <img src="assets/img_1_15_203da4.png" alt="a black and white image of a pie chart on a white background." className={styles['revenue-icon']} />
                      <p className={styles['revenue-label']}>Revenue</p>
                    </div>
                    <img src="assets/img_1_22_d10a5d.png" alt="a black and white image of a triangle on a white background." className={styles['product-image-display-style']} />
                  </div>
                  <div className={styles['order-summary-container']}>
                    <div className={styles['full-width-container']}>
                      <input placeholder="Dashboard" type="text" className={styles['rounded-input-with-shadow']} className={styles['input-style-f62::placeholder']} />
                    </div>
                    <p className={styles['order-summary-label']}>Returns</p>
                    <p className={styles['order-summary-text']}>Order Summary</p>
                  </div>
                </div>
              </div>
              <div className={styles['support-section-container']}>
                <img src="assets/img_1_17_cd0bff.png" alt="a black and white image of a button with the letter i on it." className={styles['revenue-icon']} />
                <p className={styles['support-text-container']}>Support &amp;FAQs</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['admin-report']}>

        </div>
      </div>
    </section>
  )
}

export default Dashboard