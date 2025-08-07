import React from 'react'
import Container from './Container'
import Prdct1 from "../assets/Product_1.png"
import Prdct2 from "../assets/Product_2.png"
import Prdct3 from "../assets/Product_3.png"
import Prdct4 from "../assets/Product_4.png"

const BestSeller = () => {
    return (
        <Container>
            <h2 className='font-dm font-bold text-[16px] py-3'>Best Sellers</h2>
            <div className='flex justify-between'>
                
                    <a href="#"><img className='w-[300px] h-[400px]' src={Prdct1} alt="" /></a>
                
                
                    <a href="#"><img className='w-[300px] h-[400px]' src={Prdct2} alt="" /></a>
               
                
                    <a href="#"><img className='w-[300px] h-[400px]' src={Prdct3} alt="" /></a>
                
               
                    <a href="#"><img className='w-[300px] h-[400px]' src={Prdct4} alt="" /></a>
                
            </div>
        </Container>
    )
}

export default BestSeller