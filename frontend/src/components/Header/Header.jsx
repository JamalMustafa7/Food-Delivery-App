import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='mx-auto my-7 p-4 bg-cover relative min-h-96 bg-center rounded-lg overflow-hidden' style={{backgroundImage:"url('/header_img.png"}}>
        <div className='absolute left-0 right-0 bottom-0 top-0 bg-black/[0.2]'>

        </div>
        <div className='absolute bottom-6 left-6 flex flex-col gap-5 items-start max-w-[600px] content'>
            <h2 className="font-semibold text-gray-300 text-6xl">Order your favourite food here</h2>
            <p className='text-gray-300'> Craving something delicious? Explore our menu and order your favorite dishes right from the comfort of your home. Freshly prepared, quickly delivered—satisfy your hunger with just a few clicks!</p>
            <button className='px-5 py-2 bg-white text-gray-500 rounded-3xl cursor-pointer'>View Menu</button>
        </div>
    </div>
  )
}

export default Header