import { createContext, use, useState } from "react";
import { toast } from "react-toastify";


export const MyShop=createContext();
 export const MyShopProvider =({children})=>{


const [productsData,setProductsData] = useState([])
const [cartProducts,setCartProducts]=useState(JSON.parse(localStorage.getItem("CartProducts"))||[]);

const increaseQuantity=(id)=>{
    setCartProducts((prev)=>{
       return prev.map((val)=>{
            return val.id===id?{...val,quantity:val.quantity+1}:val;
        })
    })
}
const decreaseQuantity=(id)=>{
    setCartProducts((prev)=>{
       return prev.map((val)=>{
            return val.id===id?{...val,quantity:val.quantity-1}:val;
        })
    })
}

const addToCart=(product)=>{
let data =[...cartProducts,{...product,quantity:1}]
setCartProducts(data);
localStorage.setItem("CartProducts",JSON.stringify(data))

 toast.success("Product added into Cart")
}


const updateCartProduct=(id)=>{

    let newCartProduct=cartProducts.filter((val)=>{
        return val.id!==id
    })
    setCartProducts(newCartProduct)
      localStorage.setItem("cartProduct",JSON.stringify(newCartProduct))
      toast.error("Product remove from Cart")
}

    return <MyShop.Provider value={{productsData,setProductsData,cartProducts,setCartProducts,increaseQuantity,decreaseQuantity,updateCartProduct,addToCart}}>
        {children}
    </MyShop.Provider>
}