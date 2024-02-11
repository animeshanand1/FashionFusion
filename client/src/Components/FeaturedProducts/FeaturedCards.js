import React from 'react'
import styles from './featuredCard.module.css'
import ProductCard from '../ProductCard/ProductCard'

function FeaturedCards() {
  return (
    <>
      <section className={styles["featured-products-section"]}>
        <h2 style={{ color: 'Green', textAlign: 'center' }}>Trending Now</h2>
        <div className={styles["featured-products"]}>
          <div className={styles["product-card"]}>
            <ProductCard productTitle='Vim' tagLine='lorenejebrjwhehewhewbjwb' price='3999'backgroundImageUrl='https://images.unsplash.com/photo-1611042553484-d61f84d22784?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww'/>
            <ProductCard productTitle='Vim' tagLine='lorenejebrjwhehewhewbjwb' price='3999'backgroundImageUrl='https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D'/>
            <ProductCard productTitle='Vim' tagLine='lorenejebrjwhehewhewbjwb' price='3999'backgroundImageUrl='https://images.unsplash.com/photo-1552664199-fd31f7431a55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoaW5nfGVufDB8fDB8fHww'/>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedCards