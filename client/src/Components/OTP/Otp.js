import React, { useState } from 'react'
import styles from './otp.module.css'

function Otp() {
    
    return (
        <div className={styles.container}>
            <h4>Enter OTP Code</h4>
            <form>
                <div className={styles["input-field"]}>
                    <input type="text" className={styles["otp-input"]} maxLength='1' />
                    <input type="text" className={styles["otp-input"]} maxLength='1' />
                    <input type="text" className={styles["otp-input"]} maxLength='1' />
                    <input type="text" className={styles["otp-input"]} maxLength='1' />
                </div>
            </form>
            <button className={styles["verify-btn"]}>Verify OTP</button>
        </div>

    )
}

export default Otp