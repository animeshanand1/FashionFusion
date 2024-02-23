import React from 'react'
import styles from './otp.module.css'

function Otp() {
    return (

        <div className={styles.container}>
            <h4>Enter OTP Code</h4>
            <form action="#">
                <div className={styles["input-field"]}>
                    <input type="number" className={styles["otp-input"]} />
                    <input type="number" className={styles["otp-input"]} disabled />
                    <input type="number" className={styles["otp-input"]} disabled />
                    <input type="number" className={styles["otp-input"]} disabled />
                </div>
                <button className={styles["verify-btn"]}>Verify OTP</button>
            </form>
        </div>

    )
}

export default Otp