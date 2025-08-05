import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Information from '../components/Information'
import Ads from '../components/Ads'

const Home = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Banner />
            <Information />
            <Ads />
        </>
    )
}

export default Home