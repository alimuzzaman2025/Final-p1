import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";


const ProductDetails = () => {
  let productId = useParams()
  let [singleProduct, setSingleProduct] = useState([])
  console.log(productId);

  let getProductId = ()=>{
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
      setSingleProduct(response.data)
    })
  }
  
  useEffect(()=>{
    getProductId()
  },[])

  console.log(singleProduct);
  


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
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
              </div>
              <div className=''>
                <h2>1 Review</h2>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductDetails