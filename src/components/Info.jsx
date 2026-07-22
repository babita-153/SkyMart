import { Layers, Tag, Zap } from 'lucide-react'
import React from 'react'

const Info = () => {
  return (
    <div className='flex items-center justify-around  gap-15'>
      <div className='border-black flex items-center justify-center rounded-2xl text-white font-semibold h-25  w-70 flex-col border-2'>
        
        <h1 className='text-xl font-bold text-lime-400'><Zap />Fast Delivery</h1>
        <h1 className='text-white '>Same-day on select items

</h1>
       
      </div>
       <div className='border-black flex items-center justify-center rounded-2xl text-white font-semibold h-25  w-70 flex-col border-2'>
        <h1 className='text-xl font-bold text-lime-400'><Layers />Secure Payments</h1>
        <p>100% encrypted checkout</p>
      </div>
       <div className='border-black flex items-center justify-center rounded-2xl text-white font-semibold h-25  w-70 flex-col border-2'>
         <h1 className='text-xl font-bold text-lime-400'><Tag />Bestprices</h1>
        <p>Price-match guarantee</p>
      </div>

    </div>
  )
}

export default Info
