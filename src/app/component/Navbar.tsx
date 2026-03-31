'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "../../../context/CartContext";


export default function Navbar(){

    const [isOpen,setisOpen] = useState(true);
    const { cart } = useCart();
  
    // Calculate total quantity of items in cart
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
      const handleClose = () =>{
            setisOpen(false);
        }
        
    return (
<div>
    <div className="font-sans text-xs leading-4 bg-black w-full px-4 py-2 mx-auto xl:hidden">
      <div className="relative flex items-center justify-center">
        <p className="text-white text-center font-semibold">
          Sign up and get 20% off your first order. Sign Up Now
        </p>
        <button
          onClick={handleClose}
          aria-label="Close banner"
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-sm font-semibold"
        >
          X
        </button>
      </div>
    </div>
{/* Mobile Nav */}
    <div className="flex items-center justify-between px-4 py-2 xl:hidden">
        <Image src={"/mobnav.png"} width={24} height={24} alt={"menu"} className="mt-4 ml-2"></Image>
        <p className="font-integral font-bold text-base leading-6 ml-4 mt-4 text-[25px] ">Wear Smart</p>

        <div className="flex justify-end gap-4 mt-4 w-full mr-2">
  <i className="fas fa-search text-lg text-black"></i>

  <div className="relative flex justify-center items-center">
  <Link href="/Cart">
    <button name="cart" aria-label="Cart" className="bg-white/90 border border-gray-300 flex justify-center items-center rounded-full h-7 w-7 p-2 hover:bg-white transition-colors">
      <i className="fas fa-shopping-cart text-gray-700 text-lg"></i>
    </button>
  </Link>

  {totalItems > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
      {totalItems}
    </span>
  )}
</div>

<button name="profile" aria-label="Profile" className="bg-white/90 border border-gray-300 flex justify-center items-center rounded-full h-7 w-7 p-2 hover:bg-white transition-colors">
<i className="fas fa-user-circle text-gray-700 text-lg"></i>
</button>
</div>

    </div>
{/* Desktop */}

{isOpen &&

<div className="font-sans text-xs leading-4 bg-black w-full max-w-screen-2xl mx-auto px-4 py-2 hidden xl:block">
  <div className="relative flex items-center justify-center">
    <p className="text-white text-center text-sm font-semibold">
      Sign up and get 20% off your first order. Sign Up Now
    </p>
    <button onClick={handleClose} aria-label="Close announcement" className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-sm font-semibold">
      X
    </button>
  </div>
</div>
}
<div className="items-center xl:block hidden">
    <div className="flex">
        <p className="font-integral font-bold text-[32px] w-[160px] h-[22px] leading-6 mt-4  ml-12">WearSmart </p>
        <p className="font-satoshi text-[16px]  mt-4 cursor-pointer ml-12">shop</p>
  <i className="fas fa-chevron-down ml-2 text-gray-500 group-hover:text-gray-700 mt-[20px]"></i>
  <p className="font-satoshi text-[16px] cursor-pointer  mt-4  ml-12">On Sale</p>

  <p className="font-satoshi text-[16px]  mt-4 cursor-pointer ml-12">New Arrivals</p>

  <p className="font-satoshi text-[16px]  mt-4 cursor-pointer ml-12">Brands</p>

  <div className="relative w-full max-w-md mx-auto mt-4">
  <i className="fas fa-search absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-600"></i>
  <input
    type="text"
    placeholder="Search for products..."
    className="w-full pl-12 pr-4 py-2 rounded-3xl -md border border-gray-300 bg-gray-100 text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
  />
  
</div>

   </div>

</div>

<div className="hidden xl:flex justify-end items-end -mt-6 space-x-5">
<div className="relative flex justify-center items-center">
  <Link href="/Cart">
    <button name="cart" aria-label="Cart" className="bg-white/90 border border-gray-300 flex justify-center items-center rounded-full h-7 w-7 p-2 hover:bg-white transition-colors">
      <i className="fas fa-shopping-cart text-gray-700 text-lg"></i>
    </button>
  </Link>

  {totalItems > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
      {totalItems}
    </span>
  )}
</div>



<button name="profile" aria-label="Profile" className="mr-12 bg-white/90 border border-gray-300 flex justify-center items-center rounded-full h-7 w-7 p-2 hover:bg-white transition-colors">
<i className="fas fa-user-circle text-gray-700 text-lg"></i>
</button>

 


</div>
</div>

    );

}