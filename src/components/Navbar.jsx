import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import { FaBarsStaggered, FaUser } from 'react-icons/fa6'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoCartSharp, IoSearch } from 'react-icons/io5'

import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"
import { productRemove } from './Slice/productSlice'
import { ApiData } from './ContextApi'


const Navbar = () => {
    let info = useContext(ApiData)
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let data = useSelector((state) => state.product.cartItem)
    let [category, setCategory] = useState(false)
    let [accShow, setAccShow] = useState(false)
    let [cartShow, setCartShow] = useState(false)
    let [search, setsearch] = useState('')
    let [searchFilter, setSearchFilter] = useState([])
    let [selectedIndex, setSelectedIndex] = useState(-1)
    let searchBoxRef = useRef()
    let cartRef = useRef()
    let cateRef = useRef();
    let showCartRef = useRef();
    let accRef = useRef();

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (cateRef.current.contains(e.target)) {
                setCategory(!category)

            } else {
                setCategory(false)
            }
            if (accRef.current.contains(e.target)) {
                setAccShow(!accShow)
            } else {
                setAccShow(false)

            }
            if (cartRef.current.contains(e.target)) {
                setCartShow(!cartShow)
            } else {
                setCartShow(false)
            }
            if (showCartRef.current.contains(e.target)) {
                setCartShow(true)
            }

        })
    }, [category, accShow, cartShow])

    let handleCart = () => {
        navigate("/cart")
    }
    // let handleSearch = (e) => {
    //     setsearch(e.target.value);
    //     if (e.target.value == "") {
    //         setSearchFilter([])
    //     } else {
    //         let searchOne = info.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
    //         setSearchFilter(searchOne);
    //     }
    // }



    const handleSearch = (e) => {
        setsearch(e.target.value);
        // if (e.target.value == "")

    const value = e.target.value
    // setSearch(value)
    if (value.trim() === '') {
      setSearchFilter([])
      setSelectedIndex(-1)
    } else {
      const searchResults = info.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
      setSearchFilter(searchResults)
      setSelectedIndex(-1)
    }
    // else {
    //         let searchOne = info.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
    //         setSearchFilter(searchOne);
    //     }
  }

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (searchFilter.length === 0) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) =>
        prev < searchFilter.length - 1 ? prev + 1 : 0
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : searchFilter.length - 1
      )
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (selectedIndex >= 0 && searchFilter[selectedIndex]) {
        handleSearchItem(searchFilter[selectedIndex])
      }
    }
  }






    let handleSearchItem = (item) =>{
        navigate(`/product/${item.id}`)
        setSearchFilter([])
        setsearch("")
        setSelectedIndex(-1)
    }
    let handleCheckout = () =>{
        navigate("/checkout")
        setCartShow(false)

    }



    return (
        <section className='bg-[#F5F5F3] py-3'>
            <Container>
                <div className='flex items-center'>
                    <div className='w-1/4 relative'>
                        <div className='flex items-center' ref={cateRef}>
                            <FaBarsStaggered />
                            <h2 className='pl-2'>Shop by Category</h2>
                        </div>
                        {category &&

                            <div className='bg-[#262626] py-3 absolute top-[50px] left-0 w-full  group-hover:opacity-100 z-[2]'>
                                <ul>
                                    <li className='text-[rgba(240,233,233,0.5)] text-[14px] font-dm font-normal pl-3 hover:pl-6 duration-300 ease-in-out hover:text-[#fff] py-2'><a href="">Accesories</a></li>
                                    <li className='text-[rgba(240,233,233,0.5)] text-[14px] font-dm font-normal pl-3 hover:pl-6 duration-300 ease-in-out hover:text-[#fff] py-2'><a href="">Furniture</a></li>
                                    <li className='text-[rgba(240,233,233,0.5)] text-[14px] font-dm font-normal pl-3 hover:pl-6 duration-300 ease-in-out hover:text-[#fff] py-2'><a href="">Electronics</a></li>
                                    <li className='text-[rgba(240,233,233,0.5)] text-[14px] font-dm font-normal pl-3 hover:pl-6 duration-300 ease-in-out hover:text-[#fff] py-2'><a href="">Clothes</a></li>
                                    <li className='text-[rgba(240,233,233,0.5)] text-[14px] font-dm font-normal pl-3 hover:pl-6 duration-300 ease-in-out hover:text-[#fff] py-2'><a href="">Bags</a></li>
                                    <li className='text-[rgba(240,233,233,0.5)] text-[14px] font-dm font-normal pl-3 hover:pl-6 duration-300 ease-in-out hover:text-[#fff] py-2'><a href="">Home appliances</a></li>
                                </ul>
                            </div>
                        }
                    </div>


                    <div className="relative w-2/4" ref={searchBoxRef}>
      <div className="relative">
        <input
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          className="w-full border-2 border-[#262626] py-3 px-3 rounded-full bg-white"
          type="search"
          value={search}
          placeholder="search..."
        />
        <div className="absolute top-[50%] right-4 translate-y-[-50%]">
          <IoSearch />
        </div>
      </div>

      {/* Search dropdown */}
      {searchFilter.length > 0 && (
        <div className="absolute left-0 top-[65px] bg-gray-500 w-full z-[999] max-h-[400px] overflow-y-scroll rounded-b-lg">
          {searchFilter.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleSearchItem(item)}
              className={`flex justify-between items-center px-5 py-2 cursor-pointer transition-all ${
                selectedIndex === index
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-500 text-black'
              }`}
            >
              <h2 className="font-medium">{item.title}</h2>
              <img
                className="h-[60px] w-[60px] object-cover rounded"
                src={item.thumbnail}
                alt={item.title}
              />
            </div>
          ))}
        </div>
      )}
                    </div>
                    <div className='w-1/4 relative'>
                        <div className='flex justify-end gap-5'>
                            <div className='flex' ref={accRef}>
                                <FaUser />
                                <IoMdArrowDropdown />
                            </div>
                            <div className='relative' ref={cartRef}>
                                {data.length > 0 &&
                                    <div className='absolute left-[10px] top-[-15px] h-[20px] w-[20px] bg-[grey] rounded-full text-white text-center leading-[20px]'>{data.length}</div>
                                }
                                <IoCartSharp />
                            </div>
                        </div>
                        {accShow &&
                            <div className='w-[200px] absolute top-[48px] left-[100px] z-[2]'>
                                <ul>
                                    <li className='text-[rgba(240,233,233,0.5)] text-[14px] font-dm font-normal pl-3  py-2 b hover:bg-[#fff] hover:text-[#000] bg-[#262626] text-center'><a href="">My Account</a></li>
                                    <li className='text-[rgba(240,233,233,0.5)] text-[14px] font-dm font-normal pl-3  py-2 b hover:bg-[#fff] hover:text-[#000] bg-[#262626] text-center'><a href="">Log Out</a></li>
                                </ul>
                            </div>
                        }
                        <div ref={showCartRef}>

                            {cartShow &&
                                <div className='w-[270px] absolute top-[48px] left-[62px] py-2 z-[2] bg-white'>
                                    {data.map((item, i) => (
                                        <div>
                                            <div className='flex gap-3 items-center justify-between pl-2 bg-[#F5F5F3] py-2'>
                                                <div className='w-[80px] h-[80px]'>
                                                    <img src={item.thumbnail} alt="" />
                                                </div>
                                                <div className='font-dm font-bold text-[14px] text-[#262626]'>
                                                    <p >{item.title}</p>
                                                    <p>${item.price}</p>
                                                </div>
                                                <div onClick={() => dispatch(productRemove(i))} className='justify-end pl-2'>
                                                    <RxCross2 />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className=''>
                                        <div className='flex items-center gap-1 py-[14px] pl-2'>
                                            <p>Subtotal:</p>
                                            <p className='font-dm font-bold text-[14px] text-[#262626]'> $44.00</p>
                                        </div>
                                        <div className='flex px-2 py-[20px] gap-5 justify-between'>
                                            <div onClick={handleCart} className=''>
                                                <button className=''><a className="py-2 px-5 border-2 border-[#000] bg-[#000] text-[#fff] hover:bg-[#fff] hover:text-[#000]" href="">View Cart</a></button>
                                            </div>
                                            <div className='' onClisk={handleCheckout}>
                                                <button className=''><Link
                                                    className="py-2 px-5 border-2 border-[#000] bg-[#000] text-[#fff] hover:bg-[#fff] hover:text-[#000]">Checkout</Link></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Navbar





