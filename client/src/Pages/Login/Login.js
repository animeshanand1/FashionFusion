import React, { useState } from 'react'
import styles from './login.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate('')
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:5000/user/login', {
                email: email,
                password: password
            })
            const token = response.data.token;
            sessionStorage.setItem('token', token);
            navigate('/')

        } catch (error) {
            alert('Bad Credentials')
        }

    }
    return (
        <>
            <section className={styles["login-container"]}>
                <div className={styles["login-section"]}>
                    <div className={styles["login-form"]}>
                        <div className={styles["login-header"]}>
                            <img src='/assets/images/undefined_image (32).png' style={{ width: '600px' }} />

                        </div>
                        <form className={styles["login-input"]} onSubmit={handleSubmit}>
                            <label className={styles["login-label"]}>Email Address</label>
                            <input type='email' className={styles["login-email"]} value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label className={styles["login-label"]}>Password</label>
                            <input className={styles["login-password"]} type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <div className={styles["login-options"]}>
                                <div className={styles["login-remember"]}>
                                    <img loading="lazy" src="" className={styles["login-remember-icon"]} />
                                    <div className={styles["login-remember-text"]}>Remember Me</div>
                                </div>
                                <div className={styles["login-forgot"]}>Forgot Password?
                                <button className={styles["login-button"]} onClick={()=>{navigate('/account/signup')}}>Don't have an account?Signup</button></div>
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