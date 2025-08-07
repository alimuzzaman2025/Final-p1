import React from 'react'
import Container from './Container'
import Ads1 from "../assets/Ad_1.png"
import Ads2 from "../assets/Ad_2.png"
import Ads3 from "../assets/Ad_3.png"

const Ads = () => {
  return (
    <Container>
        <div className='flex justify-between py-[100px]'>
            <div className='w-5/12 '>
                <img src={Ads1} alt="" />
            </div>
            <div className='w-6/12'>
                <div >
                    <img className='w-full h-[250px]' src={Ads2} alt="" />
                </div>
                <div className='mt-[40px]'>
                    <img className='w-full h-[250px]' src={Ads3} alt="" />
                </div>
            </div>
        </div>

    </Container> 
  )
}

export default Ads