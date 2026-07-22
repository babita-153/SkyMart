import { X, ShoppingBag,Trash2 } from "lucide-react";
import { useContext } from "react";
import { MyShop } from "../context/ShopContext";
import { toast } from "react-toastify";



const Cart = ({setIsCartOpen}) => {


const {cartProducts,setCartProducts,increaseQuantity,decreaseQuantity,updateCartProduct}=useContext(MyShop)
const orderPlace=()=>{
  localStorage.removeItem("CartProducts")
  setCartProducts([])
 toast.success("Order Placed")
}



  return (
    <div className="relative  ">
      {/* Overlay */}
  <div
       
        className={`fixed inset-0 bg-black backdrop-blur-sm z-20 transition-opacity duration-300 `}
      />

      {/* Sidebar */}
      <aside
        className={`absolute top-0 right-0 min-h-screen w-full max-w-md bg-[#111111] border-l border-neutral-700 z-40 transform transition-transform duration-300`}
      >
        {/* Header */}
        <div className="h-15 border-b border-neutral-700 flex items-center justify-between px-8">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-lime-400" size={25} />

            <h2 className="text-2xl font-bold text-white">Cart</h2>
          </div>

          <button  onClick={()=>
            setIsCartOpen((prev)=>!prev)
          }  className="text-gray-400 hover:text-white">
            <X size={25} />
          </button>
        </div>

        {/* Body */}
        {cartProducts.length === 0 ? (
          <div className="h-[calc(100%-96px)]  flex flex-col items-center justify-center px-8">
            <div className="w-28 h-28 rounded-3xl border border-neutral-700 flex items-center justify-center">
              <ShoppingBag size={55} className="text-gray-600" />
            </div>

            <h3 className="mt-8 text-4xl font-bold text-white">
              Cart is empty
            </h3>

            <p className="mt-3 text-gray-500 text-lg text-center">
              Go shop something cool!
            </p>
<p>Browse Products</p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1  overflow-y-auto p-6 space-y-4">
              {cartProducts.map((item) =>(
                
                <div key={item.id} className="flex gap-4 bg-[#181818] rounded-2xl items-center p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain bg-white rounded-xl p-2"
                  />

                  <div className="flex-1">
                    <h4 className="text-white font-medium line-clamp-2">
                      {item.title}
                    </h4>

                    <p className="text-lime-400 font-bold mt-1">
                      ${(item.price)*item.quantity}
                    </p>

                    <p className="text-gray-400 text-sm">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center justify-between w-25 h-10 border border-lime-400 rounded-lg bg-black ">
                  <button onClick={()=>{
                    decreaseQuantity(item.id)
                  }} className="w-9 h-9 text-lime-400 rounded-lg">
                    −
                  </button>

                  <span className="font-semibold text-lime-400">{item.quantity}</span>

                  <button onClick={()=>{
                    increaseQuantity(item.id)
                  }} className="w-9 h-9 rounded-lg text-lime-400">
                    +
                  </button>
                </div>
                <Trash2 onClick={()=>{
                  updateCartProduct(item.id)
                }} className="text-red-800" />

                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-neutral-700 p-6">
              <div className="flex justify-between text-xl font-semibold text-white mb-5">
                <span>Total</span>

                <span>
                  $
                  {cartProducts
                    .reduce((sum, item) => sum + item.price * item.quantity, 0)
                    .toFixed(2)}
                </span>
              </div>

              <button onClick={()=>{
                orderPlace()
              }} className="w-full bg-lime-400 text-black py-4 rounded-2xl font-semibold hover:bg-lime-300 transition">
                Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
};

export default Cart;

