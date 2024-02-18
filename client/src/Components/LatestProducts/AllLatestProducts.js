import React from 'react'
import LatestProductsCard from './LatestProductsCard'

function AllLatestProducts() {
    return (
        <>
        <h2>View Latest</h2>
        <button style={{ float: 'right', marginTop: '-2rem', marginRight: '1.5rem', background: 'blue', border: 'none', color: 'white', padding: '10px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '0.8rem', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', transition: 'background 0.3s' }}>View All</button>
        <section className='latest-product-card container' style={{
            display: 'grid',
            backgroundColor:'#b4712',
            gridTemplateColumns: 'repeat(3, 1fr)',
            width: '',
            padding: "1rem"
        }}>
            <LatestProductsCard productPrice='4021'
                productDescription='Our jeans feature a modern mid-rise waist and a flattering straight-leg silhouette, ensuring a sleek and tailored look that complements any body type. The carefully placed stitching and details add subtle character, while the deep indigo wash lends a sophisticated touch suitable for both casual and semi-formal occasions.'
                productName='Eterna long dress black'
                productImg='/assets/images/model-dress1.jpg' />
            <LatestProductsCard productPrice='4021'
                productDescription='Our jeans feature a modern mid-rise waist and a flattering straight-leg silhouette, ensuring a sleek and tailored look that complements any body type. The carefully placed stitching and details add subtle character, while the deep indigo wash lends a sophisticated touch suitable for both casual and semi-formal occasions.'
                productName='Eterna long dress black'
                productImg='/assets/images/model-dress2.jpg' />
            <LatestProductsCard productPrice='4021'
                productDescription='Our jeans feature a modern mid-rise waist and a flattering straight-leg silhouette, ensuring a sleek and tailored look that complements any body type. The carefully placed stitching and details add subtle character, while the deep indigo wash lends a sophisticated touch suitable for both casual and semi-formal occasions.'
                productName='Eterna long dress black'
                productImg='/assets/images/model-dress2.jpg' />
        </section>
        </>
    )
}

export default AllLatestProducts