import React, { useEffect, useState } from 'react'
import styles from './topbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



function Topbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user/fetch-user/65db01b360f56e96dd3b5cd0');
        // console.log('response', response.data.userDetails);
        setUserData(response.data.userDetails)
        // console.log('userdetails',userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    fetchData();
  }, [])
const navigate = useNavigate()
const accountStyles = {
  accountInfo: {
    position: 'absolute',
    zIndex: '99999',
    top: '10.4%',
    right: '0.4%',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    display: isClicked ? 'block' : 'none',
  },
  btn: {
    position: 'relative',
    padding: '5px',
    margin: '1px',
    cursor: 'pointer',
  },
  line: {
    position: 'absolute',
    width: '110%',
    borderBottom: '2px solid green',
    bottom: '-5px',
    left: 0,
  },
  tooltip: {
    position: 'absolute',
    top: '-5.0%',
    right: '1.5%',
    width: 0,
    height: 0,
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderBottom: '8px solid red',
  },
};
const token = sessionStorage.getItem('token');
// console.log('before-logout', token);

const logoutBtn = () => {
  alert('Are you sure you want to log out?');
  sessionStorage.removeItem('token');
  navigate('/account/login')
};

// console.log('after-logout', token);
const handleAccount = () => {
  if (!isClicked) {
    setIsClicked(true)
  }
  else {
    setIsClicked(false)
  }
};
return (
  <header className={styles.navbar}>
    <div className={styles["navbar-section"]}>
      <div className={styles["navbar-logo"]}>
        <div className={styles["navbar-home"]}>HOME</div>
        <img
          loading="lazy"
          src="/assets/images/account-avatar-man-svgrepo-com.svg"
          className={styles["navbar-logo-img"]}
        />
      </div>
      <div className={styles["navbar-category"]}>CATEGORY</div>
      <div className={styles["navbar-featured"]}>FEATURED</div>
      <div className={styles["navbar-new-arrivals"]}>NEW ARRIVALS</div>

    </div>
    <div className={styles["navbar-search"]}>
      <input type='text' className={styles["navbar-search-title"]} placeholder='search' />
      {userData ?
      <img
        loading="lazy"
        src={userData.image}
        className={styles["navbar-account"]}
        onClick={handleAccount}
        style={{borderRadius:'50%',height:'40px',width:'40px'}}
      /> : <img
      loading="lazy"
      src="/assets/images/account-avatar-man-svgrepo-com.svg"
      className={styles["navbar-account"]}
      onClick={handleAccount}
    />
      }
    </div>
    {/* topbar account options */}
    <div style={accountStyles.accountInfo} >
      <div style={accountStyles.card}>
        <p style={{ color: 'darkblue',fontSize:'14px' }}> Welcome {userData ? userData.firstName :'guest'}</p>
        <div style={accountStyles.row}>
          <div style={accountStyles.btn} onClick={logoutBtn}>Logout<div style={accountStyles.line}></div></div>
          <div style={accountStyles.btn} onClick={()=>navigate('/account/my-account')}>Account<div style={accountStyles.line}></div></div>
          <div style={accountStyles.btn}>My Cart<div style={accountStyles.line}></div></div>
        </div>
        <div style={accountStyles.tooltip}></div>
      </div>
    </div>
  </header>

)
}

export default Topbar