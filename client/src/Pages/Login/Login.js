import React from 'react'
import styles from './login.module.css'
function Login() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.screen}>
                    <div className={styles["screen-content"]}>
                        <form className={styles.login}>
                            <div className={styles["login-field"]}>
                                <i className={styles["login-icon"]}></i> <input type="text" className={styles["login-input"]} placeholder="User name / Email" />
                            </div>
                            <div className={styles["login-field"]}>
                                <i className={styles["login-icon"]}></i> <input type="password" className={styles["login-input"]} placeholder="Password" />
                            </div>
                            <button className={styles["login-submit"]}>
                                <span className={styles["button-text"]}>Log In Now</span>
                                <i className={styles["button-icon fas fa-chevron-right"]}></i>
                            </button>
                        </form>
                        <div className={styles["social-login"]}>
                            <h3>log in via</h3>
                            <div className={styles["social-icons"]}>
                                <i className={styles["fa fa-instagram"]}></i>
                                <i className={styles["fa facebook-official"]}></i>
                                <i className={styles["fa fa-twitter"]}></i>
                            </div>
                        </div>
                    </div>
                    <div className={styles["screen-background"]}>
                        <span className={styles["screen-background-shape1"]}></span>
                        <span className={styles["screen-background-shape2"]}></span>
                        <span className={styles["screen-background-shape3"]}></span>
                        <span className={styles["screen-background-shape4"]}></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login