import Image from "next/image"
import StayPage from "../component/Stay"
import Footer from "../component/Footer"
export default function CartPage(){

    return(
        <div>
            
            <div>
          <div className="mt-6 w-[358px] lg:ml-12 lg:w-[1340px] text-center border-[1px] flex flex-col justify-center items-center mx-auto">
  <hr />

  </div>
  </div>
             <div>
    <ul className="flex gap-2 lg:text-[16px] lg:ml-20 text-gray-500 mt-4 ml-4 lg:gap-4">
        <li>Home </li>
        <li>
                  <Image src={"/C-right-arrow.png"} width={6.5} height={11.5} alt={"right arrow"} className="mt-2 "></Image>
            
        </li>
        <li className="text-black">Cart  </li>
      
    </ul>
</div>

<p className="font-satoshi font-bold text-[32px] p-2 ml-2">YOUR CART</p>

<div className=" w-[358px] h-[410px] border-[1px] p-2 ml-4 rounded-[20px] ">

<div className="flex -mt-2">
  <Image src={"/cart1.png"} width={99} height={99} alt={"cart item"} className="mt-2" />

  <div className="ml-2 mt-2">
    <p className="font-satoshi text-[16px] font-bold">Gradient Graphic T-shirt</p>
<button>
  <Image src={"/delete.png"} width={15} height={16.25} alt={"cart item"} className="ml-[210px] -mt-9" />

</button>

    <p className="font-satoshi text-[12px] text-gray-400 font-normal -mt-6">Size: Large</p>
    <p className="font-satoshi text-[12px] text-gray-400 font-normal">Color: White</p>
    <div className="flex justify-between items-center">
    <p className="font-satoshi font-bold text-[20px] mt-2" >
        $148
    </p>

    

<div className="mt-4 ml-4 h-[31px] w-[105px] lg:h-[52px] lg:w-[170px] lg:ml-[780px] rounded-[62px] bg-lightGray flex justify-center items-center  text-center justify-evenly">
<button className=" text-customBlack  text-[24px]">-</button>
<p>1</p>
<button className=" text-customBlack text-[24px]">+</button>

</div>

    </div>
  </div>

  
</div>

<div className="mt-4 w-[330px]">
    <hr />

</div>

<div className="flex mt-2">
  <Image src={"/cart2.png"} width={99} height={99} alt={"cart item"} className="mt-2" />

  <div className="ml-2 mt-2">
    <p className="font-satoshi text-[16px] font-bold">Checkered Shirt</p>
<button>
  <Image src={"/delete.png"} width={15} height={16.25} alt={"cart item"} className="ml-[210px] -mt-9" />

</button>

    <p className="font-satoshi text-[12px] text-gray-400 font-normal -mt-6">Size: Medium</p>
    <p className="font-satoshi text-[12px] text-gray-400 font-normal">Color: Red</p>
    <div className="flex justify-between items-center">
    <p className="font-satoshi font-bold text-[20px] mt-4" >
        $180
    </p>

    

<div className="mt-4 ml-4 h-[31px] w-[105px] lg:h-[52px] lg:w-[170px] lg:ml-[780px] rounded-[62px] bg-lightGray flex justify-center items-center  text-center justify-evenly">
<button className=" text-customBlack  text-[24px]">-</button>
<p>1</p>
<button className=" text-customBlack text-[24px]">+</button>

</div>

    </div>
  </div>

  
</div>

<div className="mt-4 w-[330px]">
    <hr />

</div>

<div className="flex mt-2">
  <Image src={"/cart3.png"} width={99} height={99} alt={"cart item"} className="mt-2" />

  <div className="ml-2 mt-2">
    <p className="font-satoshi text-[16px] font-bold">Skinny Fit Jeans</p>
<button>
  <Image src={"/delete.png"} width={15} height={16.25} alt={"cart item"} className="ml-[210px] -mt-9" />

</button>

    <p className="font-satoshi text-[12px] text-gray-400 font-normal -mt-6">Size: Large</p>
    <p className="font-satoshi text-[12px] text-gray-400 font-normal">Color: Blue</p>
    <div className="flex justify-between items-center">
    <p className="font-satoshi font-bold text-[20px] mt-4" >
        $240
    </p>

    

<div className="mt-4 ml-4 h-[31px] w-[105px] lg:h-[52px] lg:w-[170px] lg:ml-[780px] rounded-[62px] bg-lightGray flex justify-center items-center  text-center justify-evenly">
<button className=" text-customBlack  text-[24px]">-</button>
<p>1</p>
<button className=" text-customBlack text-[24px]">+</button>

</div>

    </div>
  </div>

  
</div>


<div className=" w-[358px] h-[390px] p-2 -ml-3 border-[1px]  mt-6 rounded-[20px]">
  <p className="font-satoshi font-bold text-[20px] mt-2 ml-4">Order Summary</p>

  <div className="flex justify-between items-center ">
    <p className="font-satoshi font-normal text-gray-400 text-[16px] mt-4 ml-4">Subtotal</p>
    <p className="font-satoshi font-bold text-[16px] mt-4 mr-4">$565</p>
</div>


<div className="flex justify-between items-center ">
    <p className="font-satoshi font-normal text-gray-400 text-[16px] mt-4 ml-4">Discount{`(-20%)`}</p>
    <p className="font-satoshi font-bold text-[16px] mt-4 mr-4 text-rose-500">-$113</p>
</div>


<div className="flex justify-between items-center ">
    <p className="font-satoshi font-normal text-gray-400 text-[16px] mt-4 ml-4">Delivery Fee</p>
    <p className="font-satoshi font-bold text-[16px] mt-4 mr-4">$15</p>
</div>


<div className="mt-4 w-[330px] border-[1px]">
    <hr />

</div>

<div className="flex justify-between items-center ">
    <p className="font-satoshi font-normal  text-[16px] mt-4 ml-4">Total</p>
    <p className="font-satoshi font-bold text-[20px] mt-4 mr-4">$467</p>
</div>

<div className="flex flex-col items-center space-y-4 mt-4">
  {/* Promo Code Input Section */}
  <div className="flex items-center space-x-2">
    <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-[218px] h-[48px]">
      {/* Promo Code Icon */}
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
    <button className="bg-black text-white rounded-full px-4 py-2 w-[88px] h-[48px] text-sm">
      Apply
    </button>
  </div>

  {/* Checkout Button */}
  <button className="bg-black text-white rounded-full px-6 py-3 w-[218px] h-[48px] flex items-center justify-center space-x-2">
    <span>Go to Checkout</span>
    {/* Arrow Icon */}
    <Image
      src={"/arrow-down.png"}
      width={20}
      height={20}
      alt="Arrow Icon"
      className="ml-2"
    />
  </button>
</div>



</div>


</div>

<br /><br /><br /><br />
<br /><br /><br /><br />
<br /><br /><br /><br />
<br /><br /><br /><br />
<StayPage/>
<Footer/>

        </div>
    )
}