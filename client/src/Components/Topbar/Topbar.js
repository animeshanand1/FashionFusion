import React from 'react'
import './topbar.css'
function Topbar() {
  return (
    <header className='topbar'>
      <div className="link-frame">
        <div className='logo'>
          <img src='/assests/images/logo.svg' alt='logo' height='50px' width='40px'/>
        </div>
        <ul className="about-link">
          <li className="nav-link">Home</li>
          <li className="nav-link">All Products</li>
          <li className="nav-link">About</li>
          <li className="nav-link">Contact</li>
          <li className="account-link"> Account </li>
        </ul>        
        <div className="link-view-frame">
          <div className="cart">
            <img
              className="link-view-shopping-cart-emp"
              loading="eager"
              alt=""
              src='/assests/images/bag.svg' height='20px' width='20px'/>
            <div className="link-view-shopping-cart-number">
              <b className="cart-frame">0</b>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar