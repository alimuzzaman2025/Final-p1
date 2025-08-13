
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Post from '../components/Post'
import { FaListOl } from 'react-icons/fa'
import { IoMdGrid } from 'react-icons/io'
import { ApiData } from '../components/ContextApi'

import Pagination from '../components/Pagination'
import { useContext, useState } from 'react'


const Product = () => {
    let info = useContext(ApiData)
    let [perPage, setPerPage] = useState(6)
    let [currentPage, setCurrentPage] = useState(1)

    let lastPage = perPage * currentPage
    let firstPage = lastPage - perPage
    let allPage = info.slice(firstPage,lastPage)
    

    let pageNumber = []
    for(let i = 0; i < Math.ceil(info.length / perPage); i++){
        pageNumber.push(i)
    }
    console.log(pageNumber);
    
    
    

    
    
    
  
  return (
    <div>
      <Container>
        <div className='py-10'>
          <h2 className='font-dm font-bold text-[36px] text-[#262626]'>Products</h2>
          <p><Link to="/">Home</Link>/<Link to="/product">Product</Link></p>
        </div>
        <div className='flex'>
          <div className='w-1/4'>
            <h2 className='font-dm font-bold text-[36px] text-[#262626]'>Shop by Category</h2>
          </div>
          <div className='w-3/4'>
            <div className='flex justify-between'>
              <div className=''>
                <div className='flex gap-2'>
                  <FaListOl />
                  <IoMdGrid />
                </div>
              </div>
              <div className='text-end'>
                <label className="pr-2" htmlFor="">Show:</label>
                <select name="" id="" className='py-1 px-4 border-2 border-[#262626]'>
                  <option value="">6</option>
                  <option value="">9</option>
                  <option value="">12</option>
                </select>
              </div>
            </div>
            <Post allPage={allPage}/>
            <Pagination pageNumber={pageNumber}/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Product