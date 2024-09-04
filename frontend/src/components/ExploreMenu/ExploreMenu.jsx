import React from 'react'
import { menu_list } from '../../assets/assets'
import './exploremenu.css'
const ExploreMenu = () => {
  return (
    <div className=''>
      <h1 className='font-semibold text-2xl'>Explore our menu</h1>
      <p className='max-w-[700px] text-black/[0.6]'>Explore our extensive menu, offering a variety of dishes to suit every taste. From delicious appetizers to hearty mains and sweet desserts, find your favorites and enjoy quality meals made with the best ingredients.</p>
      <div className='catagories flex gap-5 overflow-x-scroll'>
        {menu_list.map((item,index)=>
        {
          return (<div key={index} className='min-w-[100px] max-w-28 text-center cursor-pointer'>
                <img src={item.menu_image} alt="menu item" />
                <p className='mt-2 text-gray-500'>{item.menu_name}</p>
            </div>)
        })}
      </div>
      <hr className="w-full h-[2px] mt-5 bg-gray-300"/>
    </div>
  )
}

export default ExploreMenu