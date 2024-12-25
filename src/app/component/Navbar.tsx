import Image from "next/image";


export default function Navbar(){

    return (
<div>
    <div className="font-sans text-xs leading-4 bg-black h-[34px] w-full pt-[9px] pb-[9px] mx-auto sm:hidden">
        <p className="text-white text-center">Sign up and get 20% off to your first order. Sign Up Now</p>
    </div>
{/* Mobile Nav */}
    <div className="flex items-center sm:hidden">
        <Image src={"/mobnav.png"} width={24} height={24} alt={"menu"} className="mt-4 ml-2"></Image>
        <p className="font-integral font-bold text-base leading-6 ml-4 mt-4 text-[25px] ">SHOP.CO</p>

        <div className="flex justify-end gap-4 mt-4  w-full mr-2">
  <i className="fas fa-search text-lg"></i>

  <i className="fas fa-shopping-cart text-lg"></i>

  <i className="fas fa-user-circle text-lg"></i>
</div>

    </div>
{/* Desktop */}

<div className="font-sans text-xs leading-4 bg-black h-[38px] w-[1440px] pt-[9px] pb-[9px] mx-auto hidden sm:block ">
  <p className="text-white text-center text-sm">Sign up and get 20% off your first order. Sign Up Now</p>
  {/* <i className="fas fa-times text-white text-lg text-center ml-[1328px] w-20 h-20  mb-10"></i> */}

</div>
<div className="items-center sm:block hidden">
    <div className="flex">
        <p className="font-integral font-bold text-[32px] w-[160px] h-[22px] leading-6 mt-4  ml-12">SHOP.CO</p>
        <p className="font-satoshi text-[16px]  mt-4  ml-12">shop</p>
  <i className="fas fa-chevron-down ml-2 text-gray-500 group-hover:text-gray-700 mt-[20px]"></i>
  <p className="font-satoshi text-[16px]  mt-4  ml-12">On Sale</p>

  <p className="font-satoshi text-[16px]  mt-4  ml-12">New Arrivals</p>

  <p className="font-satoshi text-[16px]  mt-4  ml-12">Brands</p>

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

<div className="sm:flex justify-end items-end -mt-6 hidden  space-x-6">
<i className="fas fa-shopping-cart text-lg  "></i>

<i className="fas fa-user-circle text-lg"></i>

</div>
</div>

    );

}