import React from 'react'
import Container from '../components/Container'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

const Checkout = () => {
  let data = useSelector((item)=>item.product.cartItem)
  let {totalPrice, totalQunatity} = data.reduce((acce, index)=>{
    acce.totalPrice += index.price * index.qun
    acce.totalQunatity += index.qun
    return acce;
  },{totalPrice: 0, totalQunatity: 0})
  return (
    <section className='py-12'>
      <Container>
        <div className='pb-10 md:pb-16'>
          <h1 className='text-[#262626] text-[39px] md:text-[49px] font-bold font-dms pb-[2px]'>Checkout</h1>
          <ul className='flex'>
            <li>
              <NavLink to={"/"}
                className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                Home
              </NavLink>
            </li>
            <IoIosArrowForward className='mt-2' />
            <li className='mt-[2px]'>
              <NavLink to={"/checkout"}
                className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                Checkout
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='pb-16 text-[#262626] text-[14px] sm:text-[16px]'>Have a coupon? <Link className='hover:underline'>Click here to enter your code</Link></h2>
          <div className='w-full md:w-2/3 lg:w-1/2'>
            <h2 className='text-[#262626] text-[39px] font-bold font-dms pb-4'>Billing Details</h2>
            
            
              <div className='flex items-center justify-between pb-6'>
                <div className='w-[49%]'>
                  <label htmlFor="" className='block pb-2 text-[#262626] text-[16px] font-semibold font-dms'>First Name *</label>
                  <input type="text"
                    className='border-2 border-[#F0F0F0] px-3 py-[6px] rounded-[5px] outline-0 focus:border-blue-200 w-full'
                    placeholder='First Name'
                    required
                    autoComplete='first-name'
                  />
                </div>
                <div className='w-[49%]'>
                  <label htmlFor="" className='block pb-2 text-[#262626] text-[16px] font-semibold font-dms'>Last Name *</label>
                  <input type="text"
                    className='w-full border-2 border-[#F0F0F0] px-3 py-[6px] rounded-[5px] outline-0 focus:border-blue-200'
                    placeholder='Last Name'
                    required
                    autoComplete='last-name'
                  />
                </div>
              </div>
              <div className='pb-6'>
                <label htmlFor="" className='block pb-2 text-[#262626] text-[16px] font-semibold font-dms'>Companye Name (optional)</label>
                <input type="text"
                  className='border-2 border-[#F0F0F0] px-3 py-[6px] rounded-[5px] outline-0 focus:border-blue-200 w-full'
                  placeholder='Company Name'
                  autoComplete='company-name'
                />
              </div>
              <div className='pb-6'>
                <label htmlFor="" className='block pb-2 text-[#262626] text-[16px] font-semibold font-dms'>Country *</label>
                <select
                  name="country"
                  id="country"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Please select</option>
                  <option value="bangladesh">Bangladesh</option>
                  <option value="india">India</option>
                  <option value="pakistan">Pakistan</option>
                  <option value="nepal">Nepal</option>
                  <option value="bhutan">Bhutan</option>
                  <option value="sri-lanka">Sri Lanka</option>
                  <option value="malaysia">Malaysia</option>
                  <option value="singapore">Singapore</option>
                  <option value="thailand">Thailand</option>
                  <option value="china">China</option>
                  <option value="japan">Japan</option>
                  <option value="south-korea">South Korea</option>
                  <option value="usa">United States</option>
                  <option value="canada">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="germany">Germany</option>
                  <option value="france">France</option>
                  <option value="australia">Australia</option>
                  <option value="new-zealand">New Zealand</option>
                </select>

              </div>
              <div className='pb-6'>
                <label htmlFor="" className='block pb-2 text-[#262626] text-[16px] font-semibold font-dms'>Street Address *</label>
                <input type="text"
                  className='border-2 border-[#F0F0F0] px-3 py-[6px] rounded-[5px] outline-0 focus:border-blue-200 mb-4 w-full'
                  placeholder='House number and street name'
                  required
                  autoComplete='street-address'
                />
                <input type="text"
                  className='border-2 border-[#F0F0F0] px-3 py-[6px] rounded-[5px] outline-0 focus:border-blue-200 w-full'
                  placeholder='Apartment, suite, unit etc. (optional)'
                  autoComplete='street-address'
                />
              </div>
              <div className='pb-6'>
                <label htmlFor="" className='block pb-2 text-[#262626] text-[16px] font-semibold font-dms'>Town/City *</label>
                <input type="text"
                  className='border-2 border-[#F0F0F0] px-3 py-[6px] rounded-[5px] outline-0 focus:border-blue-200 w-full'
                  placeholder='Town/City'
                  required
                  autoComplete='street-address'
                />
              </div>
              <div className='pb-6'>
                <label htmlFor="" className='block pb-2 text-[#262626] text-[16px] font-semibold font-dms'>Post Code *</label>
                <input type="text"
                  className='border-2 border-[#F0F0F0] px-3 py-[6px] rounded-[5px] outline-0 focus:border-blue-200 w-full'
                  placeholder='Post Code'
                  required
                  autoComplete='street-address'
                />
              </div>
              <div className='pb-6'>
                <label htmlFor="" className='block pb-2 text-[#262626] text-[16px] font-semibold font-dms'>Phone *</label>
                <input type="number"
                  className='border-2 border-[#F0F0F0] px-3 py-[6px] rounded-[5px] outline-0 focus:border-blue-200 w-full'
                  placeholder='Phone'
                  required
                  autoComplete='phone'
                />
              </div>
              <div className='pb-6'>
                <label htmlFor="" className='block pb-2 text-[#262626] text-[16px] font-semibold font-dms'>Email Address *</label>
                <input type="email"
                  className='border-2 border-[#F0F0F0] px-3 py-[6px] rounded-[5px] outline-0 focus:border-blue-200 w-full'
                  placeholder='Email'
                  required
                  autoComplete='email'
                />
              </div>
              <div className='pb-6 pt-12'>
                <h2 htmlFor="" className='block pb-6 text-[#262626] text-[25px] sm:text-[39px] font-semibold font-dms'>Additional Information</h2>
                <label htmlFor="" className='block pb-2 text-[#262626] text-[16px] font-semibold font-dms'>Other Notes (optional)</label>
                <textarea name="message" id="message"
                  className='border-2 border-[#F0F0F0] pl-3 rounded-[5px] outline-0 focus:border-blue-200 h-[138px] w-full pt-4'
                  placeholder='Notes about your order, e.g. special notes for delivery.'>
                </textarea>
              </div>
              <div className="pb-12">
                <h2 className='text-[#262626] text-[39px] font-bold font-dms pb-4 pt-6'>Your Order</h2>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className='border-2 border-[#F0F0F0]'>
                      <th scope="col" className="px-6 py-3">
                        Product
                      </th>
                      <th scope="col" className="px-8 py-3 border-l-2 border-[#F0F0F0]">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 border-2 border-[#F0F0F0]">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <h2>Total Qunatity</h2>
                      </th>
                      <td className="px-8 py-4 border-l-2 border-[#F0F0F0]">
                        <h4>{totalQunatity}</h4>
                      </td>
                    </tr>
                    <tr className="bg-white border-2 border-[#F0F0F0] dark:bg-gray-800">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <h2>Subtotal</h2>
                      </th>
                      <td className="px-8 py-4 border-l-2 border-[#F0F0F0]">
                        <h4>${totalPrice.toFixed(2)}</h4>
                      </td>
                    </tr>
                    <tr className="bg-white border-2 border-[#F0F0F0] dark:bg-gray-800">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <h2>Total</h2>
                      </th>
                      <td className="px-8 py-4 border-l-2 border-[#F0F0F0]">
                        <h4>${totalPrice.toFixed(2)}</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='flex items-center gap-x-6'>
                <Link to={"/cart"} 
                  className='text-md sm:text-2xl text-[#fff] font-bold font-dms bg-[#262626] py-2 px-6 sm:px-12 rounded-[5px] hover:bg-[#262626a8] cursor-pointer'>
                  Back to Cart
                </Link>
                <button 
                  className='text-md sm:text-2xl text-[#fff] font-bold font-dms bg-[#262626] py-2 px-6 sm:px-12 rounded-[5px] hover:bg-[#262626a8] cursor-pointer'>
                  Payment
                </button>
              </div>
           
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Checkout