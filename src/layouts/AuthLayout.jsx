import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className='h-screen bg-black flex justify-center items-center'>
     <Outlet/>
    </div>
  )
}

export default AuthLayout
