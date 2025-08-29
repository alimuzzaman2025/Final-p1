import React from 'react'
import Banner from '../components/Banner'
import Information from '../components/Information'
import Ads from '../components/Ads'
import { ContextApi }  from '../components/ContextApi'
import BestSeller from '../components/BestSeller'
import Ads2 from '../components/Ads2'
import SpecialOffer from '../components/SpecialOffer'
import Newarrivals from '../components/Newarrivals'
import ProductDetails from './ProductDetails'


const Home = () => {
    return (
        <>
            <Banner />
            <Information />
            <Ads />
            <Newarrivals />
            <ContextApi />
            <BestSeller />
            <Ads2 />
            <SpecialOffer />
            
            
           
            
        </>
    )
}

export default Home