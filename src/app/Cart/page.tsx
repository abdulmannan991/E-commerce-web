"use client";
import { useCart } from "../../../context/CartContext";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { motion } from "framer-motion";
import OrderSummary from "../component/order-summart";


export default function Cart() {
  const { cart, removeFromCart,  } = useCart();


 

  return (
    <div className="flex flex-col lg:flex-row p-4 sm:p-6 space-y-6 lg:space-y-0 lg:space-x-8 justify-between">
    {/* 🛒 Cart Items Section */}
    <div className="w-full lg:w-2/3">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="flex flex-col mt-56 justify-center items-center">
         <motion.p
  initial={{ opacity: 0, y: -10, scale: 0.9, color: "#9CA3AF" }} // Initial state
  animate={{
    opacity: [0.5, 1, 0.5], 
    y: [0, -5, 0], 
    scale: [0.95, 1, 0.95],
    color: ["#9CA3AF", "#6B7280", "#9CA3AF"] // Smooth color transition
  }}
  transition={{
    duration: 2, 
    repeat: Infinity, 
    repeatType: "mirror", 
    ease: "easeInOut"
  }}
  className="text-gray-500 text-center text-lg"
>
  Your cart is empty.
</motion.p>

        </div>
      ) : (
        <div className="mt-4 space-y-4">
          {cart.map((item) => (
            <div key={item._id} className="flex justify-between  border-b py-4">
              <Image
                src={urlFor(item.image).url()}
                alt={item.name}
                width={100}
                height={100}
                className="w-24 h-24"
              />
              <div className="">
                <p className="font-bold xl:-ml-[350px] :-ml-[350px]">{item.name}</p>
                <p className="xl:-ml-[350px]">Price: ${item.price}</p>
                <p className="xl:-ml-[350px]">Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          
        </div>
      )}
      
    </div>
    
    <OrderSummary />

  </div>
  
  
  );
}
