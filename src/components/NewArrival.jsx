import React, { useContext } from 'react'
import { ShoppingCart } from "lucide-react";
import { useNavigate } from 'react-router';

import { MyShop } from '../context/ShopContext';



const NewArrival = () => {
  let{setCartProducts,cartProducts,productsData}=useContext(MyShop)
    let navigate=useNavigate()
 

    let newArrival=productsData.filter((val)=>{
        return val.id<5
    })




  return (
    <div className='flex flex-col gap-2 w-125 p-5 bg-white border rounded-2xl'>
      <h1 className='text-2xl font-bold'>🥇Top Rated</h1>
     {
        newArrival.map((elem)=>{
            return  <div className='flex items-center justify-between p-2 border rounded' key={elem.id}>
        <div className='flex items-center'>
            <img onClick={()=>{
          navigate(`/main/shop/${elem.id}`)
        }}   className='w-15 h-15 object-contain bg-white rounded-xl  cursor-pointer' src={elem.image} alt="" />
            <h1>${elem.price}</h1>
        </div>
          <p  className=' cursor-pointer text-lime-400'>🛒</p>
      </div>
        })
     }
    </div>
  )
}

export default NewArrival

