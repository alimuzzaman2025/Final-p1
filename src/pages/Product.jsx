
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Post from '../components/Post'
import { FaListOl } from 'react-icons/fa'
import { IoMdGrid } from 'react-icons/io'
import { ApiData } from '../components/ContextApi'

import Pagination from '../components/Pagination'
import { useContext, useEffect, useState } from 'react'


const Product = () => {
    let info = useContext(ApiData)
    let [perPage, setPerPage] = useState(6)
    let [currentPage, setCurrentPage] = useState(1)
    let [categoryp, setCategoryp] = useState([])
    let [filterShow, setFilterShow] = useState([])
    let [listItem, setListItem] = useState("")

    let lastPage = perPage * currentPage
    let firstPage = lastPage - perPage
    let allPage = info.slice(firstPage,lastPage)
    

    let pageNumber = []
    for(let i = 0; i < Math.ceil(info.length / perPage); i++){
        pageNumber.push(i)
    }
    let paginate = (index)=>{
      setCurrentPage(index + 1)
      
    }
    let next = () =>{
      if(currentPage < pageNumber.length){
        setCurrentPage((state)=> state + 1)
      }
    }
let prev = () =>{
  if(currentPage > 1){
    setCurrentPage((state)=> state - 1)
  }
  
}

let handlePerPageChange = (e) =>{
  setPerPage(e.target.value);
  
}
useEffect(()=>{
  setCategoryp([...new Set(info.map((item) =>item.category))])
},[info])

let handleCategory = (citem) =>{
  let cateFilter = info.filter((item)=>item.category == citem)
  setFilterShow(cateFilter);
  
  
}

let handleAll = () =>{
  setFilterShow("")
  
}

let handleListItem = () =>{
  setListItem("active");
  
}



    
    
    

    
    
    
  
  return (
    <div>
      <Container>
        <div className='py-10'>
          <h2 className='font-dm font-bold text-[36px] text-[#262626]'>Products</h2>
          <p><Link to="/">Home</Link>/<Link to="/product">Product</Link></p>
        </div>
        <div className='flex'>
          <div className='w-1/4'>
            <h2 className='font-dm font-bold text-[20px] text-[#262626]'>Shop by Category</h2>
            <ul>
              <li onClick={handleAll}className='font-dm font-normal text-[14px] capitalize text-[#262626]'>All Product</li>
              {categoryp.map((item)=>(
                <li onClick={()=>handleCategory(item)} className='font-dm font-normal text-[14px] capitalize text-[#262626]'>{item}</li>
                ))}
              </ul>
          </div>
          <div className='w-3/4'>
            <div className='flex justify-between'>
              <div className=''>
                <div className='flex gap-2'>
                  <div className='p-3' onClick={()=>setListItem("")}>
                    <IoMdGrid />
                  </div>
                  <div onClick={handleListItem} className='bg-[red] p-3'>
                    <FaListOl />
                  </div>
                </div>
              </div>
              <div className='text-end'>
                <label className="pr-2" htmlFor="">Show:</label>
                <select onChange={handlePerPageChange} name="" id="" className='py-1 px-4 border-2 border-[#262626]'>
                  <option value="6">6</option>
                  <option value="9">9</option>
                  <option value="12">12</option>
                </select>
              </div>
            </div>
            <Post allPage={allPage} filterShow={filterShow} listItem={listItem}/>
            <Pagination pageNumber={pageNumber} paginate={paginate} next={next} prev={prev} currentPage={currentPage}/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Product