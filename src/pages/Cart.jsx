import React from 'react'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { increment, productRemove } from '../components/Slice/productSlice'
import { decrement } from '../components/Slice/productSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
  let data = useSelector((state) => state.product.cartItem)
  let dispatch = useDispatch()

  let { totalPrice, totalQuantity } = data.reduce((acc, item) => {
    acc.totalPrice += item.price * item.qun
    acc.totalQuantity += item.qun
    return acc;
  }, { totalPrice: 0, totalQuantity: 0 })



  return (
    <Container>
      <div className="">
        <h2>Home / Cart</h2>
        <div class="mt-6 ">
          {data.map((item, i) => (

            <div class="w-full mb-8">
              <div class="space-y-6">
                <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                  <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <div className='w-[100px] h-[100px]'>

                      <img src={item.thumbnail} alt="" />
                    </div>
                    <label for="counter-input" class="sr-only">Choose quantity:</label>
                    <div class="flex items-center justify-between md:order-3 md:justify-end">
                      <div class="flex items-center">
                        <button onClick={() => dispatch(decrement(i))} type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                          <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                          </svg>
                        </button>
                        <input type="text" id="counter-input" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value={item.qun} required />
                        <button onClick={() => dispatch(increment(i))} type="button" id="increment-button" data-input-counter-increment="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                          <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                          </svg>
                        </button>
                      </div>
                      <div class="text-end md:order-4 md:w-32">
                        <p class="text-base font-bold text-gray-900 dark:text-white">${(item.price * item.qun).toFixed(2)}</p>
                      </div>
                    </div>

                    <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                      {item.title}

                      <div class="flex items-center gap-4">

                        <button onClick={() => dispatch(productRemove(i))}
                          type="button" class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                          <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-end'>
        <div className=''>
          <h2 className='text-end py-4 text-[20px] font-bold'>Cart totals</h2>
          <div class="relative overflow-x-auto w-[500px]">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Sub Total
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ${totalPrice.toFixed(2)}
                  </th>
                </tr>
              </thead>
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" class="px-6 py-3">
                    {totalQuantity}
                  </th>
                </tr>
              </thead>
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Total
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ${totalPrice.toFixed(2)}
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
      <div className='text-end'>
        <button className='py-4'><Link
          className="py-2 inline-block px-5 border-2 border-[#000] bg-[#000] text-[#fff] hover:bg-[#fff] hover:text-[#000]" to="/checkout">Checkout</Link></button>
      </div>
    </Container>
  )
}

export default Cart











