import React from 'react'
import styles from './login.module.css'
function Login() {
    return (
        <>
            <section className={styles["login-container"]}>
                <div className={styles["login-section"]}>
                    <div className={styles["login-form"]}>
                        <div className={styles["login-header"]}>
                            <div className={styles["login-title"]}>Welcome</div>
                            <div className={styles["login-subtitle"]}>Please login here</div>
                        </div>
                        <form className={styles["login-input"]}>
                            <label className={styles["login-label"]}>Email Address</label>
                            <input type='email' className={styles["login-email"]}/>
                            <label className={styles["login-label"]}>Password</label>
                            <input className={styles["login-password"]} type='password'/>
                            <div className={styles["login-options"]}>
                                <div className={styles["login-remember"]}>
                                    <img loading="lazy" src="" className={styles["login-remember-icon"]} />
                                    <div className={styles["login-remember-text"]}>Remember Me</div>
                                </div>
                                <div className={styles["login-forgot"]}>Forgot Password?</div>
                            </div>
                            <button className={styles["login-button"]}>Login</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login