
import React from 'react'
import Container from './Container'
import Logo from "../assets/Logo.png"
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <section className='bg-[#F5F5F3] w-full'>
    <Container>
        <div className='flex pt-[50px]'>
            <div className='w-1/6'>
                <ul>
                    <li><a className='font-dm font-bold text-[12px] text-[#000]' href="#">MENU</a></li>
                    <li><a className='font-dm font-normal text-[10px] text-[#6D6D6D]' href="#">Home</a></li>
                    <li><a className='font-dm font-normal text-[10px] text-[#6D6D6D]' href="#">Shop</a></li>
                    <li><a className='font-dm font-normal text-[10px] text-[#6D6D6D]' href="#">About</a></li>
                    <li><a className='font-dm font-normal text-[10px] text-[#6D6D6D]' href="#">Contact</a></li>
                    <li><a className='font-dm font-normal text-[10px] text-[#6D6D6D]' href="#">Journal</a></li>
                </ul>
                <div className='flex gap-3 py-10 font-medium'>
                    <FaFacebookF />
                    <FaLinkedinIn />
                    <AiFillInstagram />


                </div>
            </div>
            <div className='w-1/6'>
                <ul>
                    <li><a className='font-dm font-bold text-[12px] text-[#000]' href="#">SHOP</a></li>
                    <li><a className='font-dm font-normal text-[10px] text-[#6D6D6D]' href="#">Category 1</a></li>
                    <li><a className='font-dm font-normal text-[10px] text-[#6D6D6D]' href="#">Category 2</a></li>
                    <li><a className='font-dm font-normal text-[10px] text-[#6D6D6D]' href="#">Category 3</a></li>
                    <li><a className='font-dm font-normal text-[10px] text-[#6D6D6D]' href="#">Category 4</a></li>
                    <li><a className='font-dm font-normal text-[10px] text-[#6D6D6D]' href="#">Category 5</a></li>
                </ul>
            </div>
            <div className='w-1/6'>
                <ul>
                    <li><a className='font-dm font-bold text-[12px] text-[#000]' href="#">HELP</a></li>
                    <li><a className='font-dm font-normal text-[10px] text-[#6D6D6D]' href="#">Privacy Policy</a></li>
                    <li><a className='font-dm font-normal text-[10px] text-[#6D6D6D]' href="#">Terms & Conditions</a></li>
                    <li><a className='font-dm font-normal text-[10px] text-[#6D6D6D]' href="#">Special E-shop</a></li>
                    <li><a className='font-dm font-normal text-[10px] text-[#6D6D6D]' href="#">Shipping</a></li>
                    <li><a className='font-dm font-normal text-[10px] text-[#6D6D6D]' href="#">Secure Payments</a></li>
                </ul>
            </div>
            <div className='w-1/6'>
                <p className='font-dm font-bold text-[12px] text-[#000]'>(052) 611-5711</p>
                <p className='font-dm font-bold text-[12px] text-[#000]'>company@domain.com</p>
                <p className='font-dm font-normal text-[10px] text-[#6D6D6D]'>575 Crescent Ave. Quakertown, PA 18951</p>
            </div>
            <div className='w-2/6 pl-8'>
                <img src={Logo} alt="" />
                <div className=''><p className='pt-[170px] font-dm font-normal text-[14px] text-[#6D6D6D]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p></div>
            </div>
        </div>
    </Container>
    </section>
  )
}

export default Footer
