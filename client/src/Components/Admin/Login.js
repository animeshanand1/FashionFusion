import React, { useState } from 'react'
import styles from './login.module.css'
import axios from 'axios';
function AdminLogin() {
    const [formData,setFormData]=useState({
        role:'Admin',
        email:'',
        password:''
    })

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const {email,role,password}=formData;
        try {
           const response= await axios.post('http://localhost:5000/admin/login',{
            email,password,role
           })
         
        } catch (error) {
            console.error('err',error)
            alert('Validation Failed');
        }
       
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    console.log(formData)
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
                        <form onSubmit={handleSubmit}>
                            <p>
                                <label>Username or email address<span>*</span></label>
                                <input type="text" name="email" placeholder="Username or Email" required value={formData.email} onChange={handleChange}/>
                            </p>
                            <p>
                                <label>Password<span>*</span></label>
                                <input type="password" name='password' placeholder="Password" required value={formData.password} onChange={handleChange}/>
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