"use client";
import { useCart } from "../../../context/CartContext";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default function Cart() {
  const { cart, removeFromCart, getCartTotal } = useCart();

  // Calculate the subtotal dynamically
  const subtotal = getCartTotal();
  const discount = subtotal * 0.2; // Assuming a 20% discount
  const deliveryFee = 15; // Fixed delivery fee
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="flex flex-col lg:flex-row p-4 sm:p-6 space-y-6 lg:space-y-0 lg:space-x-8 justify-between">
    {/* 🛒 Cart Items Section */}
    <div className="w-full lg:w-2/3">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
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
  
    {/* 📦 Order Summary Section */}
    <div className="w-full lg:w-[358px] p-4 sm:p-6 border-[1px] rounded-[20px] mt-6 lg:mt-0">
      <p className="font-satoshi font-bold text-[20px] lg:text-[24px]">Order Summary</p>
  
      <div className="flex justify-between items-center mt-4">
        <p className="font-satoshi font-normal text-gray-400 text-[16px] lg:text-[20px]">Subtotal</p>
        <p className="font-satoshi font-bold text-[16px] lg:text-[20px]">${subtotal.toFixed(2)}</p>
      </div>
  
      <div className="flex justify-between items-center mt-4">
        <p className="font-satoshi font-normal text-gray-400 text-[16px] lg:text-[20px]">Discount (-20%)</p>
        <p className="font-satoshi font-bold text-rose-500 text-[16px] lg:text-[20px]">-${discount.toFixed(2)}</p>
      </div>
  
      <div className="flex justify-between items-center mt-4">
        <p className="font-satoshi font-normal text-gray-400 text-[16px] lg:text-[20px]">Delivery Fee</p>
        <p className="font-satoshi font-bold text-[16px] lg:text-[20px]">${deliveryFee.toFixed(2)}</p>
      </div>
  
      <div className="mt-4 border-t border-gray-300"></div>
  
      <div className="flex justify-between items-center mt-4">
        <p className="font-satoshi font-normal text-[16px] lg:text-[20px]">Total</p>
        <p className="font-satoshi font-bold text-[20px] lg:text-[24px]">${total.toFixed(2)}</p>
      </div>
  
      <div className="flex flex-col items-center space-y-4 mt-4">
        {/* Promo Code Input Section */}
        <div className="flex items-center space-x-2 w-full">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full lg:w-[326px]">
            <Image
              src={"/promo.png"}
              width={20}
              height={20}
              alt="Promo Code Icon"
              className="mr-2"
            />
            <input
              type="text"
              placeholder="Add promo code"
              className="bg-gray-100 text-gray-400 text-sm w-full outline-none"
            />
          </div>
          <button className="bg-black text-white rounded-full px-4 py-2 text-sm w-[88px] lg:w-[119px]">
            Apply
          </button>
        </div>
  
        {/* Checkout Button (Stays Inside Card) */}
        <button className="bg-black text-white rounded-full px-6 py-3 w-full lg:w-[326px] flex items-center justify-center space-x-2">
          <span>Go to Checkout</span>
          <Image src={"/arrow-down.png"} width={20} height={20} alt="Arrow Icon" className="ml-2" />
        </button>
      </div>
    </div>
  </div>
  
  );
}
