import React from 'react'
import styles from './login.module.css'
function AdminLogin() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles["col-left"]}>
                    <div className={styles["login-text"]}>
                        <h2>Welcome Back</h2>
                        
                    </div>
                </div>
                <div className={styles["col-right"]}>
                    <div className={styles["login-form"]}>
                        <h2>Login</h2>
                        <form>
                            <p>
                                <label>Username or email address<span>*</span></label>
                                <input type="text" placeholder="Username or Email" required />
                            </p>
                            <p>
                                <label>Password<span>*</span></label>
                                <input type="password" placeholder="Password" required />
                            </p>
                            <p>
                                <input type="submit" value="Sing In" />
                            </p>
                            <p>
                                <a href="">Forget Password?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminLogin