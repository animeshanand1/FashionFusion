import React from 'react'
import styles from './signup.module.css'
function Signup() {
    const handleSubmit=async(e)=>{
        e.preventDefault()
    }
  return (
  <div className={styles.container}>
    <div className={styles.title}>Registration</div>
    <div className={styles.content}>
      <form onSubmit={handleSubmit}>
        <div className={styles["user-details"]}>
          <div className={styles["input-box"]}>
            <label className={styles.details}>Full Name</label>
            <input type="text" placeholder="Enter your name" required/>
          </div>
          <div className={styles["input-box"]}>
            <label className={styles.details}>Username</label>
            <input type="text" placeholder="Enter your username" required/>
          </div>
          <div className={styles["input-box"]}>
            <label className={styles.details}>Email</label>
            <input type="text" placeholder="Enter your email" required/>
          </div>
          <div className={styles["input-box"]}>
            <label className={styles.details}>Phone Number</label>
            <input type="text" placeholder="Enter your number" required/>
          </div>
          <div className={styles["input-box"]}>
            <label className={styles.details}>Password</label>
            <input type="text" placeholder="Enter your password" required />
          </div>
          <div className={styles["input-box"]}>
            <label className={styles.details}>Confirm Password</label>
            <input type="text" placeholder="Confirm your password" required />
          </div>
        </div>
        <div className={styles["gender-details"]}>
          <div className={styles.category}>
            <label for="dot-1">
            <input type='radio' className={styles.dot.one} name="gender" value=''/>
            <span className={styles.gender}>Male</span>
          </label>
          <label for="dot-2">
            <input type='radio' className={styles.dot.two} name="gender" value=''/>
            <span className={styles.gender}>Female</span>
          </label>
          <label for="dot-3">
            <input type='radio' className={styles.dot.three} name="gender" value=''/>
            <span className={styles.gender}>Custom</span>
            </label>
          </div>
        </div>
        <div className={styles.button}>
          <input type="submit" value="Register"/>
        </div>
      </form>
    </div>
  </div>

  )
}

export default Signup