import React from 'react'
import styles from './productCard.module.css'
import ProductCard from '../ProductCard/ProductCard'

function FeaturedCards() {
  return (
    <>
    <section className={styles["featured-products-section"]}>
    <div class="featured-products">
    </div>
    </section>
    <ProductCard/>
    </>
  )
}

export default FeaturedCards