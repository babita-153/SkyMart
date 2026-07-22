import { Star, ShoppingCart, Heart } from "lucide-react";
import {  useContext, useEffect, useState } from "react";

import { useParams } from "react-router";
import axios from "axios";
import { MyShop } from "../context/ShopContext";

const DetailCard = () => {


  const {addToCart,cartProducts,increaseQuantity,decreaseQuantity,updateCartProduct}=useContext(MyShop)
const [singleProduct,setSingleProduct]=useState({})

   let {id}=useParams();
  
  
  const getSingleProduct=async()=>{
    let res=await axios.get(`https://fakestoreapi.com/products/${id}`)
   setSingleProduct(res.data)
  
  }
useEffect(()=>{
  getSingleProduct()
},[])

let isCart=cartProducts.find((val)=>{
  return val.id===singleProduct.id
})
if(isCart){
  if(isCart.quantity<1){
   updateCartProduct(isCart.id)
  }
}


  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-lg p-8">

        {/* Product Image */}
        <div className="bg-gray-100 rounded-2xl flex justify-center items-center p-10">
          <img
            src={singleProduct.image}
            alt={singleProduct.title}
            className="h-96 object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">

          <div>
            {/* Category */}
            <span className="inline-block bg-indigo-100 text-indigo-700 text-sm px-4 py-1 rounded-full capitalize font-medium">
              {singleProduct.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 mt-4">
              {singleProduct.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex items-center bg-green-600 text-white px-3 py-1 rounded-lg">
                <Star size={16} className="fill-yellow-300 text-yellow-300" />
                <span className="ml-1 font-semibold">
                  {singleProduct.rating?.rate}
                </span>
              </div>

              <span className="text-gray-500">
                ({singleProduct.rating?.count} Reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-6">
              <h2 className="text-5xl font-bold text-green-600">
                ${singleProduct.price}
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                Inclusive of all taxes
              </p>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">
                Product Description
              </h3>

              <p className="text-gray-600 leading-7">
                {singleProduct.description}
              </p>
            </div>

            {/* Features */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">
                Highlights
              </h3>

              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                <li>Premium quality material</li>
                <li>Lightweight & durable</li>
                <li>Modern and stylish design</li>
                <li>Perfect for everyday use</li>
              </ul>
            </div>
          </div>

          {/* Buttons */}
          {(isCart)? <div className="flex items-center justify-between w-25 h-10 border border-lime-400 rounded-lg bg-black ">
                  <button onClick={()=>{
                    decreaseQuantity(singleProduct.id)
                  }} className="w-9 h-9 text-lime-400 rounded-lg">
                    −
                  </button>

                  <span className="font-semibold text-lime-400">{isCart.quantity}</span>

                  <button onClick={()=>{
                    increaseQuantity(singleProduct.id)
                  }}  className="w-9 h-9 rounded-lg text-lime-400">
                    +
                  </button>
                </div>
                :
                <button onClick={()=>{
            addToCart(singleProduct)
          }} className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition">
            Add to Cart
          </button>
                }

            <button className="flex items-center gap-2 border border-gray-300 px-8 py-4 rounded-xl hover:bg-gray-100 transition">
              <Heart size={20} />
              Wishlist
            </button>
          </div>
        </div>
      </div>
   
  );
};

export default DetailCard;