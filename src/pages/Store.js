import  {configureStore}  from '@reduxjs/toolkit'
import productSlice from '../components/Slice/productSlice'

export default configureStore({
  reducer: {
    product:productSlice
  },
})