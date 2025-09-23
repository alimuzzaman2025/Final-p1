import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Container from '../components/Container'
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { addTocart } from '../components/Slice/productSlice'


const ProductDetails = () => {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let productId = useParams()
  let [singleProduct, setSingleProduct] = useState([])


  let getProductId = () => {
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
      setSingleProduct(response.data)
    })
  }

  useEffect(() => {
    getProductId()
  }, [])

  let clientRating = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5
    return (
      singleProduct.rating > index + 1 ? <div className=''><FaStar className='text-[gold]' /></div> : singleProduct.rating > number ? <FaStarHalfAlt /> : <FaRegStar />
    )
  })

  let discount = (singleProduct.price * singleProduct.discountPercentage) / 100
  let mainPrice = singleProduct.price - discount

  let handleCart = (item) => {
    dispatch(addTocart({ ...item, qun:1 }))
    
    toast("Add to Cart successfully done");
    setTimeout(() => {
      navigate("/cart")
    }, 2000)
  }



  return (
    <div>
      <Container>
        <div className=''>
          <div className=''>
            <div className='flex justify-center'>
              <img src={singleProduct.thumbnail} alt="" />
            </div>
            <div className='flex items-center gap-3'>
              <div className='flex'>
                {clientRating}
                {/* <FaStar />
                <FaStarHalfAlt />
                <FaRegStar /> */}
              </div>
              <div className=''>
                <h2>Review</h2>
              </div>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
            <div className='flex items-center gap-5 py-[24px]'>
              <div className=''>
                <del className='font-dm text-[#767676] text-[16px] font-normal'>${singleProduct.price}</del>
              </div>
              <div className=''><h5>${mainPrice.toFixed(2)}</h5></div>
            </div>
            <div className='flex items-center py-[30px] border-t-1'>
              <div className='font-bold font-dm text-[#262626] w-[59px] leading-[23px]'>COLOR:</div>
              <div className='flex  gap-2 pl-8'>
                <div className='w-4 h-4 rounded-full bg-[#979797]'></div>
                <div className='w-4 h-4 rounded-full bg-[#FF8686]'></div>
                <div className='w-4 h-4 rounded-full bg-[#7ED321]'></div>
                <div className='w-4 h-4 rounded-full bg-[#B6B6B6]'></div>
                <div className='w-4 h-4 rounded-full bg-[#15CBA5]'></div>
              </div>
            </div>
            <div className=''>
              <div className='flex items-center'><label className="pr-8" htmlFor="">SIZE:</label>
                <select className='w-36 h-6 border-1 border-[#979797]'>
                  <option value="">S</option>
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
                </select>
              </div>
            </div>
            <div className='py-[30px] border-b-1'>
              <div className=''>STATUS:</div>
              <div className=''></div>
            </div>
            <div className='flex gap-4 items-center py-[30px]'>
              <div className=''>
                <button><a className="w-36 h-6 border-1 py-2 px-12 bg-[#000] text-[#fff]" href="">Add to Wish List</a></button>
              </div>
              <div onClick={()=>handleCart(singleProduct)}>
                <button><a className="w-36 h-6 border-1 py-2 px-16 bg-[#000] text-[#fff]">Add to Cart</a></button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductDetails




