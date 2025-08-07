import React from 'react'
import Container from './Container'
import Ad21 from "../assets/ad21.png"
import Ad22 from "../assets/ad22.png"
import Ad23 from "../assets/ad23.png"
import Ad24 from "../assets/ad24.png"

const SpecialOffer = () => {
    return (

        <Container className={"py-20"}>
            <h2 className='font-dm font-bold text-[16px] py-3'>Special Offer</h2>
            <div className='flex justify-between'>
                <a href="#"><img className='w-[300px] h-[400px]' src={Ad21} alt="" /></a>
                <a href="#"><img className='w-[300px] h-[400px]' src={Ad22} alt="" /></a>
                <a href="#"><img className='w-[300px] h-[400px]' src={Ad23} alt="" /></a>
                <a href="#"><img className='w-[300px] h-[400px]' src={Ad24} alt="" /></a>
            </div>
        </Container>


    )
}

export default SpecialOffer