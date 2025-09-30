import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    cartItem: localStorage.getItem("Cart")? JSON.parse(localStorage.getItem("Cart")): [],
  },
  reducers: {
    addTocart: (state, action) => {
        let findProduct = state.cartItem.findIndex((item)=> item.id == action.payload.id)
        if(findProduct !== -1){
            state.cartItem[findProduct].qun += 1
            localStorage.setItem("Cart", JSON.stringify(state.cartItem))
        }else{
            state.cartItem = [ ...state.cartItem, action.payload]
            localStorage.setItem("Cart", JSON.stringify(state.cartItem))
        }
    },
    increment: (state, action)=>{
      state.cartItem[action.payload].qun += 1
      localStorage.setItem("Cart", JSON.stringify(state.cartItem))
    },
    decrement: (state, action)=>{
      if(state.cartItem[action.payload].qun > 1){
        state.cartItem[action.payload].qun -= 1
        localStorage.setItem("Cart", JSON.stringify(state.cartItem))
      }
      }
  },
})

export const {addTocart, increment, decrement} = productSlice.actions

export default productSlice.reducer

         
        