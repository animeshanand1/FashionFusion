import React from 'react'
import './hero-banner.css'

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
                Click edit button to change this text. Lorem ipsum dolor sit
                amet,
              </p>
              <p class="we-print-what">consectetur adipiscing elit. Sapien.</p>
            </span>
            <button>Get Started</button>
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