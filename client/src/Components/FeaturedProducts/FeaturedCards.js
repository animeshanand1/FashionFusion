import React from 'react'
import styles from './productCard.module.css'
import ProductCard from '../ProductCard/ProductCard'

function FeaturedCards() {
  return (
    <>
    <section className={styles["featured-products-section"]}>
      <h2 style={{color:'Green', textAlign:'center'}}>Trending Now</h2>
    <div className={styles["featured-products"]}>
    <div className={styles["product-card"]}>
    <ProductCard productTitle='Vim' imgSrc='https://bit.ly/2kOzUTm' tagLine='lorenejebrjwhehewhewbjwb' price='3999'/>
    <ProductCard productTitle='Vim' imgSrc='https://bit.ly/2kOzUTm' tagLine='lorenejebrjwhehewhewbjwb' price='3999'/>
    <ProductCard productTitle='Vim' imgSrc='https://bit.ly/2kOzUTm' tagLine='lorenejebrjwhehewhewbjwb' price='3999'/>
      </div>
    </div>
    </section>
    </>
  )
}

export default FeaturedCards