import React, { useState } from 'react'
import logo from "../assets/My_assets/logoMY.png"
import cart from "../assets/My_assets/cartMY.png"
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu , setMenu] = useState("")

  return (
    <div className='flex flex-row justify-between items-center mt-2 px-4 w-full h-[70px]'>
      <Link to="/">
        <div className='flex flex-row gap-[10px]'>
          <img src={logo} className='w-[60px] h-[45px]' alt="logo"/>
            <div className='items-center '>
                <h1 className='font-bold py-2'>
                  GrandLine
                </h1>
            </div>
        </div>
      </Link>
      <div>
        <ul className='flex flex-row gap-[10px] font-bold'>
        <Link to="/"><li onClick={()=>{setMenu("Home")}} className='hover:text-blue-800 cursor-pointer'>Shop {menu == "Home" ? <hr className='w-[44px] h-[3px] bg-blue-600'/> : <></>}</li></Link>
          <Link to="/men"><li onClick={()=>{setMenu("men")}} className='hover:text-blue-800 cursor-pointer'>Men {menu == "men" ? <hr className='w-[44px] h-[3px] bg-blue-600'/> : <></>}</li></Link>
          <Link to="/kids"><li onClick={()=>{setMenu("kids")}} className='hover:text-blue-800 cursor-pointer'>Kids {menu == "kids" ? <hr className='w-[44px] h-[3px] bg-blue-600'/> : <></>}</li></Link>
          <Link to="/womens"><li onClick={()=>{setMenu("Me")}} className='hover:text-blue-800 cursor-pointer'>Women {menu == "Me" ? <hr className='w-[44px] h-[3px] bg-blue-600'/> : <></>}</li></Link>
        </ul>
      </div>
      <div className='flex flex-row gap-2'>
        <Link to="/cart">
          <img src={cart} className='w-[30px] h-[30px] mt-2'  alt="" />
        </Link>
        <div className='w-[22px] h-[22px] flex justify-center items-center bg-red-600 rounded-full absolute text-white'>
          0
        </div>
        <Link to="/login">
          <button className='w-[100px] transition h-[45px] bg-blue-600 color-white rounded-[75px] cursor-pointer text-white hover:bg-transparent hover:text-black outline outline-2'>
            Login
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
