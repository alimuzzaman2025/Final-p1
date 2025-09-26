import React, { useContext } from 'react'
import Container from './Container'
import Newarrival1 from "../assets/newarrival1.png"
import { HiHeart } from 'react-icons/hi'
import { IoGitCompareSharp } from 'react-icons/io5'
import { FaShoppingCart } from 'react-icons/fa'
import { ApiData } from './ContextApi'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="absolute top-[50%] right-[30px] bg-[green] w-[40px] h-[40px] leading-[40px] rounded-full text-center text-[#fff] translate-y-[-50%] cursor-pointer"

            onClick={onClick}
        >
            <GrFormNext className="inline-block" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="absolute top-[50%] left-[30px] bg-[red] w-[40px] h-[40px] leading-[40px] rounded-full text-center text-[#fff] translate-y-[-50%] cursor-pointer z-[1]"

            onClick={onClick}
        >
            <GrFormPrevious className="inline-block" />
        </div>
    );
}

const Newarrivals = () => {
    let data = useContext(ApiData)
    let ProductSlice = {
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }
    return (
        <div>
            <Container>
                <h2 className='font-dm font-bold text-[20px] text-[#262626]'>New Arrivals</h2>

                <div className=''>
                    <Slider {...ProductSlice}>

                        {data.map((item) => (

                            <div className='w-[24%]'>
                                <div className='relative group'>
                                    <Link to="/product">

                                        <img src={item.thumbnail} alt="" />
                                    </Link>
                                    <div className='bg-[#fff] absolute left-0 bottom-0 w-full opacity-0 group-hover:opacity-100'>
                                        <ul className='pr-2 pt-4 pb-4'>
                                            <li className='flex justify-end items-center gap-4'><span>Add to Wish List</span><HiHeart /></li>
                                            <li className='flex justify-end items-center gap-4 py-2'><span>Compare</span><IoGitCompareSharp /></li>
                                            <li className='flex justify-end items-center gap-4'><span>Add to Cart</span><FaShoppingCart /></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='flex justify-between'>
                                    <div className=''>
                                        <h2>{item.title}</h2>
                                        <p>Black</p>
                                    </div>
                                    <p>${item.price}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </div>
    )
}

export default Newarrivals