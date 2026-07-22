import { Star } from "lucide-react";
import { useContext } from "react";
import { MyShop } from "../context/ShopContext";
import { nanoid } from 'nanoid'
import { useNavigate } from "react-router";

const ProductCard = ({ product,isCart }) => {
const {increaseQuantity,decreaseQuantity,updateCartProduct,addToCart}=useContext(MyShop);
let navigate=useNavigate()



if(isCart){
  if(isCart.quantity<1){
    updateCartProduct(product.id)
  }
}

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 group">
      {/* Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center p-6 overflow-hidden">
        <img onClick={()=>{
          navigate(`/main/shop/${product.id}`)
        }}
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mt-3 text-lg font-bold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-500 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mt-4">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <span className="ml-1 font-medium">{product.rating.rate}</span>
          <span className="text-gray-500 text-sm ml-2">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price & Button */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
       {(isCart)? <div className="flex items-center justify-between w-25 h-10 border border-lime-400 rounded-lg bg-black ">
                  <button onClick={()=>{
                    decreaseQuantity(product.id)
                  }} className="w-9 h-9 text-lime-400 rounded-lg">
                    −
                  </button>

                  <span className="font-semibold text-lime-400">{isCart.quantity}</span>

                  <button onClick={()=>{
                    increaseQuantity(product.id)
                  }}  className="w-9 h-9 rounded-lg text-lime-400">
                    +
                  </button>
                </div>
                :
                <button onClick={()=>{
            addToCart(product)
          }} className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition">
            Add to Cart
          </button>
                }



          
        </div>
      </div>
    </div>
  );
};

export default ProductCard;