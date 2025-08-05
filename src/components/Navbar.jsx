import React from 'react'
import Container from './Container'
import { FaBarsStaggered, FaUser } from 'react-icons/fa6'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoCartSharp, IoSearch } from 'react-icons/io5'

const Navbar = () => {
    return (
        <section className='bg-[#F5F5F3] py-3'>
            <Container>
                <div className='flex items-center'>
                    <div className='w-1/4'>
                        <div className='flex items-center'>
                            <FaBarsStaggered />
                            <h2 className='pl-2'>Shop by Category</h2>
                        </div>
                    </div>
                    <div className='w-2/4'>
                        <div className='relative'>
                            <input className='w-full border-2 border-[#262626] py-3 px-3 rounded-full bg-[white]' type="search" placeholder='search...' />
                            <div className='absolute top-[50%] right-4 translate-y-[-50%]'>
                                <IoSearch />
                            </div>
                        </div>
                    </div>
                    <div className='w-1/4'>
                        <div className='flex justify-end'>
                            <div className='flex'>
                                <FaUser />
                                <IoMdArrowDropdown />
                            </div>
                            <IoCartSharp />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Navbar

