import React, { useContext, useEffect, useState } from 'react'
import { MyShop } from '../context/ShopContext'
import ProductCard from '../components/ProductCard';
import { ChevronDown } from 'lucide-react';
import { Outlet, useParams, useSearchParams } from 'react-router';
import axios from 'axios';
import DetailCard from './DetailCard';

const Shop = () => {

  const {productsData,setProductsData,cartProducts,singleProduct,setSingleProduct}=useContext(MyShop);

  const [select,setSelect]=useState(null)
  console.log(select)
  let productData
let [searchParam]=useSearchParams();
let search=searchParam.get("category")
console.log(search)
if(search){
 productData=productsData.filter((val)=>{
    return val.category===search
})
}else if(select){

  productData=productsData.filter((val)=>{
  return val.category===select;
  
})
}
else{
  productData=productsData
}
console.log(productData)


  return (
   
 
     <div className=' flex flex-col gap-5'>

   <section className="min-w-full flex flex-col gap-3 mx-auto px-8 py-6">
    
      <div className='flex flex-col gap'>
        <h1 className="text-4xl font-bold text-lime-400">All Products</h1>

        <p className=" text-lg text-gray-700 font-semibold">
          products found
        </p>
      </div>

      <div className="border-2 border-lime-400  rounded-xl p-3">

          {/* Category */}
          <div className="relative w-full lg:w-full">
            <select
              name="select"
              onChange={(e)=>{
                setSelect(e.target.value);
              }}
              className="appearance-none w-full h-11  border border-neutral-700 rounded-xl px-3 text-black outline-none focus:border-lime-400"
            >
              <option value="All Categories">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="men's clothing">Men 's Clothing</option>
              <option value="jewelery">Jewellery</option>
            </select>

            <ChevronDown
              size={18}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </div>

         
       
      </div>
    </section>

  <div className='grid grid-cols-4 gap-5'>
{
  productData.map((elem)=>{
      let isCart=cartProducts.find((val)=>{
        return val.id===elem.id
      })
    return <ProductCard product={elem} key={elem.id} isCart={isCart}/>
  })
}
      
    </div>
   

<Outlet/>

    </div>

  )
}

export default Shop
