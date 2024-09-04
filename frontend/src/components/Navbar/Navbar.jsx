import React, { useState } from 'react'
import { assets } from '../../assets/assets'
const Navbar = () => {
  const [menuItem,setMenuItem]=useState("home")
  return (
    <div className='p-5 flex justify-between items-center capitalize'>
      <img src={assets.logo} alt="Logo" className='w-[150px]'/>
      <ul className='flex gap-5  text-gray-500 text-[18px]'>
        <li className={`cursor-pointer ${menuItem==="home"?"pb-[2px] border-solid border-b-[2px] border-gray-500":""}`} onClick={()=>setMenuItem("home")}>home</li>
        <li className={`cursor-pointer ${menuItem==="menu"?"pb-[2px] border-solid border-b-[2px] border-gray-500":""}`} onClick={()=>setMenuItem("menu")}>menu</li>
        <li className={`cursor-pointer ${menuItem==="mobile-app"?"pb-[2px] border-b-[2px] border-solid border-gray-500":""}`} onClick={()=>setMenuItem("mobile-app")}>mobile-app</li>
        <li className={`cursor-pointer ${menuItem==="contact"?"pb-[2px] border-b-[2px] border-solid border-gray-500":""}`} onClick={()=>setMenuItem("contact")} >contact us</li>
      </ul>
      <div className="navbar-right flex gap-6 items-center">
        <img src={assets.search_icon} alt='search'/>
        <div className="relative">
          <img src={assets.basket_icon} alt="" />
          <div className='absolute right-[-8px] top-[-8px] bg-red-500 w-6 h-6 text-center text-slate-200 flex items-center justify-center rounded-full'>
            9
          </div>
        </div>
        <button className='text-purple-500 border-solid border-[1px] py-[6px] px-6 rounded-[50px]  border-red-300 hover:bg-gray-400 hover:text-gray-900 transtion-all duration-300 cursor-pointer capitalize'>sign in</button>

      </div>
    </div>
  )
}

export default Navbar