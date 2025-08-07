import axios from 'axios'
import React, { createContext,useEffect, useState} from 'react'

let ApiData = createContext()

const ContextApi = ({children}) => {
    let [info, setInfo] = useState([])
    let getData = () =>{
        axios.get("https://dummyjson.com/products").then((response)=>{
            setInfo(response.data.products)
            
        })
    }

useEffect(()=>{
    getData()
},[])

  return (
    <ApiData value={info}>{children}</ApiData>
  )
}

export {ContextApi,ApiData}