import React, { useEffect, useState } from 'react'
import Newarrival1 from "../assets/newarrival1.png"
import { Link } from 'react-router-dom'
import { HiHeart } from 'react-icons/hi'
import { IoGitCompareSharp } from 'react-icons/io5'
import { FaShoppingCart } from 'react-icons/fa'
import Product from '../pages/Product'

const Post = ({ allPage, filterShow, listItem }) => {
    let [cateFilterShow, setCateFilterShow] = useState([])
    let [show, setShow] = useState(true)


    useEffect(() => {
        let cateall = filterShow.slice(0, 5)
        setCateFilterShow(cateall)
    }, [filterShow])

    let handleShow = () =>{
        setCateFilterShow(filterShow)
        setShow(false)
    }

    let handleLess = () =>{
               let cateall = filterShow.slice(0, 5)
        setCateFilterShow(cateall)
          setShow(true)
    }



    return (
        <>
            <div className=''>
                {cateFilterShow.length > 0 ?
                    <>
                        <div className="flex flex-wrap justify-between">
                            {
                                cateFilterShow.map((item) => (
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
                                ))
                            }
                        </div>
                        {filterShow.length > 5 && show ? <h2 onClick={handleShow}>Show All</h2> 
                        : filterShow.length > 5 &&
                        <h2 onClick={handleLess}>Less</h2>
                        }

                    </>

                    : <div className={`${listItem == "active" ? 'w-full' : 'w-full flex flex-wrap'}`}>
                        {allPage.map((item) => (
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
                    </div>}
            </div>
        </>
    )
}

export default Post





