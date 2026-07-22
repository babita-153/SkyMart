

const HomeCartInfo = () => {

// let {cartProducts}=useContext(MyStore);
// let totalcartValue=cartProducts.reduce((acc,val)=>{
//     return (val.price*val.quantity)+acc
// },0)

  return (
    <div className='flex items-center justify-center gap-10'>
      <div className='border-lime-400 flex items-center justify-center rounded-2xl text-black font-semibold h-25  w-60 flex-col border-2'>
        
        <h1 className='text-2xl font-bold text-lime-400'>🛒 </h1>
        <h1 className='text-white '>Cart Items</h1>
       
      </div>
       <div className='border-lime-400 border-2 flex items-center justify-center rounded-2xl text-black font-semibold h-25  w-60 flex-col '>
        <h1 className='text-2xl font-bold text-lime-400'>💸$</h1>
        <p>Cart value</p>
      </div>
       <div className='border-lime-400 border-2 flex items-center justify-center rounded-2xl text-black font-semibold h-25  w-60 flex-col '>
         <h1 className='text-2xl font-bold text-lime-400'>⭐5</h1>
        <p>top Products</p>
      </div>
       <div className='border-lime-400 border-2 flex items-center justify-center rounded-2xl text-black font-semibold h-25  w-60 flex-col '>
         <h1 className='text-2xl font-bold text-lime-400'>🗂6</h1>
        <p>Categories</p>
      </div>
    </div>
  )
}

export default HomeCartInfo
