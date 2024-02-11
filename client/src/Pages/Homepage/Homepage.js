import React from 'react'
import Topbar from '../../Components/Topbar/Topbar'
import FeaturedCards from '../../Components/FeaturedProducts/FeaturedCards'
import HeroBanner from '../../Components/Banner/HeroBanner'

function Homepage() {
    return (
        <>
            <Topbar />
            <HeroBanner/>
            <FeaturedCards />
        </>
    )
}

export default Homepage