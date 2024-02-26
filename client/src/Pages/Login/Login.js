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
            <div className={styles.container}>
                <div className={styles.title}>Login</div>
                <div className={styles.content}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles["user-details"]}>
                            <div className={styles["input-box"]}>
                                <label className={styles.details}>Email</label>
                                <input type="text" name="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className={styles["input-box"]}>
                                <label className={styles.details}>Password</label>
                                <input type="password" name="password" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className={styles.button}>
                            <button type="submit" className={styles.login}>Login</button>
                            <button onClick={() => { navigate('/account/signup') }} className={styles.register}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login