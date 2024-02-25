import React, { useState } from 'react';
import styles from './signup.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { firstName, lastName, email, password, confirmPassword, phone } = formData;
      const response = await axios.post('http://localhost:5000/user/register', {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        phone
      });
      navigate('/account/login');
    } catch (error) {
      console.error(error);
      alert('Validation Failed');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  console.log('f',formData);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Registration</div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <div className={styles["user-details"]}>
            <div className={styles["input-box"]}>
              <label className={styles.details}>First Name</label>
              <input type="text" name="firstName" placeholder="Enter your first name" required value={formData.firstName} onChange={handleChange} />
            </div>
            <div className={styles["input-box"]}>
              <label className={styles.details}>Last Name</label>
              <input type="text" name="lastName" placeholder="Enter your last name" required value={formData.lastName} onChange={handleChange} />
            </div>
            <div className={styles["input-box"]}>
              <label className={styles.details}>Email</label>
              <input type="text" name="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange} />
            </div>
            <div className={styles["input-box"]}>
              <label className={styles.details}>Phone Number</label>
              <input type="text" name="phone" placeholder="Enter your number" required value={formData.phone} onChange={handleChange} />
            </div>
            <div className={styles["input-box"]}>
              <label className={styles.details}>Password</label>
              <input type="password" name="password" placeholder="Enter your password" required value={formData.password} onChange={handleChange} />
            </div>
            <div className={styles["input-box"]}>
              <label className={styles.details}>Confirm Password</label>
              <input type="password" name="confirmPassword" placeholder="Confirm your password" required value={formData.confirmPassword} onChange={handleChange} />
            </div>
          </div>
          <div className={styles["gender-details"]}>
            <div className={styles.category}>
              <label htmlFor="dot-1">
                <input type='radio' className={styles.dot.one} name="gender" value='' />
                <span className={styles.gender}>Male</span>
              </label>
              <label htmlFor="dot-2">
                <input type='radio' className={styles.dot.two} name="gender" value='' />
                <span className={styles.gender}>Female</span>
              </label>
              <label htmlFor="dot-3">
                <input type='radio' className={styles.dot.three} name="gender" value='' />
                <span className={styles.gender}>Custom</span>
              </label>
            </div>
          </div>
          <div className={styles.button}>
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
