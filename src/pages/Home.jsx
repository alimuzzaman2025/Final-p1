import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Information from '../components/Information'
import Ads from '../components/Ads'
import { ContextApi }  from '../components/ContextApi'
import BestSeller from '../components/BestSeller'
import Ads2 from '../components/Ads2'
import SpecialOffer from '../components/SpecialOffer'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Banner />
            <Information />
            <Ads />
            <ContextApi />
            <BestSeller />
            <Ads2 />
            <SpecialOffer />
            <Footer />
            
        </>
    )
}

export default Home