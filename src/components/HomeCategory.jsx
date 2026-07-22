import React from 'react'
import { NavLink } from 'react-router'

const HomeCategory = () => {

  return (
    <div>
        <h1 className='text-lime-400  mb-7 text-2xl font-bold'>Shop By Category</h1>
       <div className='flex gap-20 items-center justify-center flex-wrap'>
    
    
     <NavLink to={`/main/shop/?category=electronics`}> <div className='border-2 flex items-center justify-center h-25 w-50 rounded-2xl hover:bg-lime-400 transition-shadow hover:scale-105 border-black bg-white text-black font-bold text-xl'>
        <h1>Electronic</h1>
      </div></NavLink>
       
      <NavLink to={`/main/shop/?category=women's clothing`}>
        <div className=' border-2  flex items-center justify-center h-25 w-50 rounded-2xl hover:bg-lime-400 transition-shadow hover:scale-105 border-black bg-white text-black font-bold text-xl'>
        <h1>Women's</h1>
      </div>
      </NavLink>
      
      <NavLink to={`/main/shop/?category=men's clothing`}>
       <div className=' border-2 flex items-center justify-center h-25 w-50 rounded-2xl hover:bg-lime-400 transition-shadow hover:scale-105 border-black bg-white text-black font-bold text-xl'>
      <h1>Men's</h1>
      </div>
      </NavLink>

       <NavLink to={'/main/shop/?category=jewelery'}><div className=' border-2 flex items-center justify-center h-25 w-50 rounded-2xl hover:bg-lime-400 transition-shadow  hover:scale-105 border-black bg-white text-black font-bold text-xl'>
        <h1>Jewellery</h1>
      </div></NavLink>
       
    </div>
    </div>
  )
}

export default HomeCategory
