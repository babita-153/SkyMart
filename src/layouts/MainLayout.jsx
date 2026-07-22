import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import { MyShopProvider } from '../context/ShopContext'
import Footer from '../components/Footer'
import Cart from '../components/Cart'

const MainLayout = () => {
  const[isCartOpen,setIsCartOpen]=useState(false)
  return (
    <div className='p-3 flex flex-col gap-3'>
     <MyShopProvider>
       <Navbar setIsCartOpen={setIsCartOpen}/>
       {(isCartOpen)&&<Cart setIsCartOpen={setIsCartOpen}/>}
      <Outlet/>
      <Footer/>
     </MyShopProvider>
    </div>
  )
}

export default MainLayout
