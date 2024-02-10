import React from 'react'
import './hero-banner.css'
import Button from '../Utils/Button'

function HeroBanner() {
  return (
    <section className='hero-banner'>
    <div class="hero-banner-container">
      <div class="divelementor-element">
        <div class="heading-5">
          <h3 class="best-quality-products">Best Quality Products</h3>
          <h1 className=''><span style={{color:'green'}}>You Ask</span> <span style={{color:'red'}}> We Deliver!</span></h1>
        </div>
        <div class="divelementor-widget-container">
            <span class="we-print-what-container1">
              <p class="we-print-what">
              Step into Style,Discover Your Signature Look with Our Latest Collection
              </p>
              <p class="we-print-what" style={{color:'orange'}}>Find Your Perfect Outfit with Us</p>
            </span>
            <Button children='Get Started'/>
        </div>
      </div>
      <div class="divelementor-element1">
        <img style={{mixBlendMode:'multiply'}}
          class="image26-freepng-icon"
          alt=""
          src='/assests/images/model.png'/>
      </div>
    </div>
    </section>
  )
}

export default HeroBanner