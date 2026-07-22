import { ShoppingCart, LogOut, Zap } from "lucide-react";
import { useContext } from "react";
import { Navigate, NavLink, useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";
import Cart from "./Cart";
import { MyShop } from "../context/ShopContext";


const Navbar = ({setIsCartOpen}) => {
  let navigate=useNavigate()
let {setLoggedUsser,loggedUser}=useContext(Auth)
let {cartProducts}=useContext(MyShop)

  return (
    <nav className="w-full sticky top-0 z-50 rounded-xl bg-[#0D0D0D] border-b border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 justify-center">
            
          <div className="w-10 h-8 rounded-xl bg-lime-400 flex items-center justify-center">
            <Zap className="text-black w-6 h-6 fill-black" />
          </div>
           <h1 className="text-2xl font-bold">
            <span className="text-white">Sky</span>
            <span className="text-lime-400">Mart</span>
          </h1>

        </div>
          
       

        {/* Nav Links */}
        <div className="flex items-center text-white gap-12 text-md font-medium">
         <NavLink end className={({ isActive }) =>
    isActive
      ? "text-lime-400"
      : "text-white hover:text-lime-400"
  }  to={'/main'}>Home</NavLink>
         <NavLink className={({ isActive }) =>
    isActive
      ? "text-lime-400"
      : "text-white hover:text-lime-400"
  } to={'/main/shop'}>Shop</NavLink>
         <NavLink className={({ isActive }) =>
    isActive
      ? "text-lime-400"
      : "text-white hover:text-lime-400"
  } to={'/main/about'}>About</NavLink>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* User */}
          <div className="flex items-center gap-3 bg-[#171717] border border-[#2a2a2a] px-2 py-1 rounded-2xl">
            <div className="w-7 h-7 uppercase rounded-lg bg-lime-400 text-black font-bold flex items-center justify-center">
           
            </div>

            <span className="text-white text-md">
         {loggedUser.name}
            </span>
          </div>

          {/* Cart */}
          <button onClick={()=>{
            setIsCartOpen((prev)=>!prev)
          }} className="w-10 h-10 rounded-2xl border border-[#2a2a2a] flex items-center justify-center hover:border-lime-400 transition">
            
            <ShoppingCart  className="text-white" size={18} />
            <sup><span className="text-md font-bold text-lime-400">{cartProducts.length}</span></sup>
          </button>
          

          {/* Logout */}
          <button onClick={()=>{
            localStorage.removeItem("LoggedUser")
              toast.warn("user logout")
              navigate('/');
          

          }} className="w-10 h-10 rounded-2xl border border-[#2a2a2a] flex items-center justify-center hover:border-red-500 transition">
            <LogOut className="text-white" size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
