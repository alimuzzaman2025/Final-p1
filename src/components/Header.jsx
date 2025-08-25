import React from 'react'
import Container from './Container'
import Logo from "../assets/Logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Container >
        <div className='flex py-4'>
        <div className=''>
            <img src={Logo} alt="" />
        </div>
        <div className='flex mx-auto '>
            <ul className='flex items-center gap-4'>
                <li className='font-dm font-bold text-[14px] text-[#767676]'><a href="#">Home</a></li>
                <li className='font-dm font-normal text-[14px] text-[#767676]'><Link to="/product">Shop</Link></li>
                <li className='font-dm font-normal text-[14px] text-[#767676]'><a href="#">About</a></li>
                <li className='font-dm font-normal text-[14px] text-[#767676]'><a href="#">Contacts</a></li>
                <li className='font-dm font-normal text-[14px] text-[#767676]'><a href="#">Journal</a></li>
            </ul>
        </div>
        </div>
    </Container>
  )
}

export default Header
