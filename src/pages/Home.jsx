import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import { MyShop } from '../context/ShopContext';
import HomeHero from '../components/HomeHero';
import HomeCartInfo from '../components/HomeCartInfo';
import HomeCategory from '../components/HomeCategory';
import TopRatedProduct from '../components/TopRatedProduct';
import NewArrival from '../components/NewArrival';
import Info from '../components/Info';

const Home = () => {

    const {productsData,setProductsData}=useContext(MyShop);
    const getProducts=async()=>{
    let res=await axios.get('https://fakestoreapi.com/products')
    console.log(res.data)
    setProductsData(res.data)

      }
    
    useEffect(()=>{
        getProducts()
    },[])


  return (
    <div className='flex flex-col gap-5 px-20'>
    <HomeHero/>
    <HomeCartInfo/>
    <HomeCategory/>
    <div className='flex gap-5'>
      <TopRatedProduct/>
      <NewArrival/>
    </div>
    <Info/>
    </div>
  )
}

export default Home
