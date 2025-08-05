import React from 'react'
import Container from './Container'
import { HiTruck } from 'react-icons/hi'
import { GrRotateLeft } from 'react-icons/gr'

const Information = () => {
  return (
    <Container>
        <div className='flex justify-between py-2'>
            <div className='flex items-center'>
                <h3 className='font-bold'>2</h3>
                <p className='font-normal font-dm text-[12px] text-[#6D6D6D] pl-2'>Two years warranty</p>
            </div>
            <div className='flex items-center'>
                <HiTruck />
                <p className='font-normal font-dm text-[12px] text-[#6D6D6D] pl-2'>Free shipping</p>
            </div>
            <div className='flex items-center'>
                <GrRotateLeft className='font-bold text-[#000]'/>
                <p className='font-normal font-dm text-[12px] text-[#6D6D6D] pl-2'>Return policy in 30 days</p>
            </div>
        </div>
    </Container>
  )
}

export default Information