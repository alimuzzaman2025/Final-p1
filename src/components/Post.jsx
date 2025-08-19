import React from 'react'
import Newarrival1 from "../assets/newarrival1.png"
import { Link } from 'react-router-dom'
import { HiHeart } from 'react-icons/hi'
import { IoGitCompareSharp } from 'react-icons/io5'
import { FaShoppingCart } from 'react-icons/fa'
import Product from '../pages/Product'

const Post = ({allPage,filterShow}) => {
    console.log(filterShow);
    
    
    return (
        <>
        <div className='flex flex-wrap justify-between'>
            {filterShow.length > 0 ? filterShow.map((item)=>(
        <div className='w-[32%]'>
            <div className='relative group'>
                <Link to={`/product/${item.id}`}>
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
        )): allPage.map((item)=>(
        <div className='w-[32%]'>
            <div className='relative group'>
                <Link to={`/product/${item.id}`}>
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

        </div>
        </>
    )
}

export default Post

        


