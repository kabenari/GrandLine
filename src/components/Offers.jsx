import React from 'react'
import pic from "../assets/My_assets/Offers.webp"

const Offers = () => {
  return (
    <div className='offers w-[65%] h-[60vh] flex mx-auto bg-gradient-to-b from-blue-700 to-white mb-[200px] mt-[200px]'>
      <div className='left flex flex-col justify-center items-center px-6'>
        <h1 className='font-semibold text-[60px] text-slate-800'>Exclusive</h1>
        <h1 className='font-semibold text-[30px] text-slate-800'>And Limited Drops!</h1>
        <button className='mt-[10px] w-[282px] h-[40px] rounded-[35px] text-white bg-blue-500 hover:bg-transparent hover:text-black outline outline-2'>Check Now</button>
      </div>
      <div className='right flex items-center justify-end'>
        <img className='' width={"400px"}  height={"400px"} src={pic} alt="" />
      </div>
    </div>
  )
}

export default Offers
