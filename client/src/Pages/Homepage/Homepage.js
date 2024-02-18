import React from 'react'
import Topbar from '../../Components/Topbar/Topbar'
import FeaturedCards from '../../Components/FeaturedProducts/FeaturedCards'
import HeroBanner from '../../Components/Banner/HeroBanner'
import AllLatestProducts from '../../Components/LatestProducts/AllLatestProducts'
import Footer from '../../Components/Footer/Footer'
function Homepage() {
    return (
        <>
            <Topbar />
            <HeroBanner/>
            <FeaturedCards />
            <AllLatestProducts/>
            <Footer/>
        </>
    )
}

export default Homepage