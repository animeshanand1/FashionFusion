import React from 'react'
import styles from './productCard.module.css'
import ProductCard from '../ProductCard/ProductCard'

function FeaturedCards() {
  return (
    <>
    <section className={styles["featured-products-section"]}>
    <div class="featured-products">
      <h2 style={{color:'Green', textAlign:'center'}}>Trending Now</h2>
    <ProductCard/>
    </div>
    </section>
    </>
  )
}

export default FeaturedCards