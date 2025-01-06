import Image from "next/image"
import ScrollAnimation from "../component/Scroll_animation"

export default function CartPage(){

    return(
        <div className="overflow-x-clip">
            
            <ScrollAnimation>
            <div>
          <div className=" mt-6 w-[358px] lg:ml-12 lg:w-[1340px] text-center border-[1px] flex flex-col justify-center items-center mx-auto">
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

<p className="font-satoshi font-bold text-[32px] lg:text-[40px] lg:ml-[70px] p-2 ml-2">YOUR CART</p>

<div className=" w-[358px]  h-[480px] lg:w-[715px]  lg:h-[578px]  border-[1px] p-2 ml-4 rounded-[20px] lg:ml-[80px]">

<div className="flex -mt-2">
  <Image src={"/CartD1.png"} width={124} height={124} alt={"cart item"} className="mt-2 ml-4" />

  <div className="ml-2 mt-2">
    <p className="font-satoshi text-[16px] lg:text-[20px] font-bold">Gradient Graphic T-shirt</p>
<button>
  <Image src={"/delete.png"} width={15} height={16.25} alt={"cart item"} className="hidden ml-[210px] -mt-9" />
  <Image src={"/delete.png"} width={24} height={24} alt={"cart item"} className="hidden lg:block ml-[520px] -mt-9" />

</button>

    <p className="font-satoshi text-[12px] lg:text-[14px] text-gray-400 font-normal -mt-6 ">Size: Large</p>
    <p className="font-satoshi text-[12px] lg:text-[14px] text-gray-400 font-normal">Color: White</p>
    <div className="flex justify-between items-center">
    <p className="font-satoshi font-bold text-[20px] lg:text-[24px] mt-8" >
        $148
    </p>

    

<div className="mt-10 ml-4 mr-4 h-[31px] w-[105px] lg:h-[52px] lg:w-[170px] rounded-[62px] bg-lightGray flex justify-center items-center  text-center justify-evenly">
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
  <Image src={"/CartD2.png"} width={124} height={124} alt={"cart item"} className="rounded-[9px] mt-2 ml-4" />

  <div className="ml-2 mt-2">
    <p className="font-satoshi text-[16px] lg:text-[20px] font-bold">Checkered Shirt</p>
<button>
  <Image src={"/delete.png"} width={15} height={16.25} alt={"cart item"} className="hidden ml-[210px] -mt-9" />
  <Image src={"/delete.png"} width={24} height={24} alt={"cart item"} className="hidden lg:block ml-[520px] -mt-9" />


</button>

    <p className="font-satoshi text-[12px] lg:text-[14px] text-gray-400 font-normal -mt-6">Size: Medium</p>
    <p className="font-satoshi text-[12px] lg:text-[14px] text-gray-400 font-normal">Color: Red</p>
    <div className="flex justify-between items-center">
    <p className="font-satoshi font-bold text-[20px] lg:text-[24px] mt-8" >
        $180
    </p>

    

<div className="mt-8 ml-11 h-[31px] w-[105px] lg:h-[52px] lg:w-[170px]  rounded-[62px] bg-lightGray flex justify-center items-center  text-center justify-evenly">
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
  <Image src={"/CartD3.png"} width={124} height={124} alt={"cart item"} className="mt-2 ml-4 rounded-[9px]" />

  <div className="ml-2 mt-2">
    <p className="font-satoshi text-[16px] lg:text-[20px] font-bold">Skinny Fit Jeans</p>
<button>
  <Image src={"/delete.png"} width={15} height={16.25} alt={"cart item"} className="hidden ml-[210px] -mt-9" />
  <Image src={"/delete.png"} width={24} height={24} alt={"cart item"} className="hidden lg:block ml-[520px] -mt-9" />


</button>

    <p className="font-satoshi text-[12px] lg:text-[14px] text-gray-400 font-normal -mt-6">Size: Large</p>
    <p className="font-satoshi text-[12px] lg:text-[14px] text-gray-400 font-normal">Color: Blue</p>
    <div className="flex justify-between items-center">
    <p className="font-satoshi font-bold text-[20px] lg:text-[24px] mt-10 " >
        $240
    </p>

    

<div className="mt-10 ml-14 h-[31px] w-[105px] lg:h-[52px] lg:w-[170px]  rounded-[62px] bg-lightGray flex justify-center items-center  text-center justify-evenly">
<button className=" text-customBlack  text-[24px]">-</button>
<p>1</p>
<button className=" text-customBlack text-[24px]">+</button>

</div>

    </div>
  </div>

  
</div>


<div className=" w-[358px] h-[390px] lg:w-[505px] lg:h-[458px] p-2 -ml-3 border-[1px]  mt-6 rounded-[20px] lg:-mt-[560px] lg:ml-[750px]">
  <p className="font-satoshi font-bold text-[20px] lg:text-[24px] mt-2 ml-4">Order Summary</p>

  <div className="flex justify-between items-center ">
    <p className="font-satoshi font-normal text-gray-400 text-[16px] mt-4 ml-4 lg:text-[20px]">Subtotal</p>
    <p className="font-satoshi font-bold text-[16px] mt-4 mr-4 lg:text-[20px]">$565</p>
</div>


<div className="flex justify-between items-center ">
    <p className="font-satoshi font-normal text-gray-400 text-[16px] mt-4 ml-4 lg:text-[20px]">Discount{`(-20%)`}</p>
    <p className="font-satoshi font-bold text-[16px] mt-4 mr-4 text-rose-500 lg:text-[20px]" >-$113</p>
</div>


<div className="flex justify-between items-center ">
    <p className="font-satoshi font-normal text-gray-400 text-[16px] mt-4 ml-4 lg:text-[20px]">Delivery Fee</p>
    <p className="font-satoshi font-bold text-[16px] mt-4 mr-4 lg:text-[20px]">$15</p>
</div>


<div className="mt-4 w-[330px] border-[1px]">
    <hr />

</div>

<div className="flex justify-between items-center ">
    <p className="font-satoshi font-normal  text-[16px] mt-4 ml-4 lg:text-[20px]">Total</p>
    <p className="font-satoshi font-bold text-[20px] mt-4 mr-4 lg:text-[24px]">$467</p>
</div>

<div className="flex flex-col items-center space-y-4 mt-4">
  {/* Promo Code Input Section */}
  <div className="flex items-center space-x-2">
    <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-[218px] h-[48px] lg:w-[326px] lg:h-[48px]">
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
    <button className="bg-black text-white rounded-full px-4 py-2 w-[88px] lg:w-[119px] h-[48px] text-sm">
      Apply
    </button>
  </div>

  {/* Checkout Button */}
  <button className="bg-black text-white rounded-full px-6 py-3 w-[218px] h-[48px] lg:w-[457px] lg:h-[60px] flex items-center justify-center space-x-2">
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
</ScrollAnimation>
<ScrollAnimation>
<div className="w-[392px] h-[846px] lg:w-[1441px] lg:h-[499px] bg-lightGray lg:mt-[200px] mt-[550px]  ">

<div className="flex justify-center items-center ">
<div className="w-[358px] h-[293px] lg:w-[1240px] lg:h-[180px] -ml-4  flex justify-center rounded-[20px] -mt-[100px] bg-black">
            <div className=" font-integral font-bold text-white text-[32px] mt-6 lg:flex lg:justify-start lg:items-start gap-2">
            
            <p className="hidden lg:block w-[451px] h-[94px]">STAY UPTO DATE ABOUT OUR LATEST OFFER</p>
            <p className="lg:hidden ">
            STAY UPTO DATE 
            </p>
            <span className="-mt-2 block lg:hidden">
              About Our
            </span>
{/*             
            <span className="  hidden lg:block">
              About 
            </span> */}
            
            <span className="-mt-2 block lg:hidden ">
              Latest Offers
            </span>
            
            <p className="">
            <span className="  hidden  ">
              Our Latest Offers
            </span>
            </p>
            
            
            <div>
            
            
              
            <div className="relative w-[311px]">
              <span className="text-[16px] mt-2 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                📧 
              </span>
              <input
                name="text"
                placeholder="Enter your email address"
                className="text-[14px] text-black outline-none pl-10 h-[42px] w-full rounded-[62px] bg-white border-[1px] font-satoshi font-medium mt-4"
              />
            </div>
              
            
            <button className="h-[42px] w-[311px] rounded-[62px] bg-white border-[1px] font-satoshi font-medium flex justify-center items-center mt-4">
              <p className="text-black font-satoshi text-[14px]">
              Subscribe to Newsletter
              </p>
            </button>
            </div>
            
            
            
            </div>
            
            
 
</div>

</div>

  </div>
 
 <div className="lg:hidden  -mt-[650px]">
     <p className="font-integral  font-bold text-[28px] w-[160px] h-[22px] leading-6 mt-8  ml-2 ">SHOP.CO</p>
       <p className="font-satoshi text-gray-500 text-[14px] mt-2 ml-2">
       We have clothes that suits your style and which you are proud to wear. From women to men.
       </p>
 
       <p className="mt-8 ml-2">
         <Image src={"/Social.png"} height={28} width={148} alt="social" ></Image>
       </p>
       <div className="flex justify-around items-start w-full mt-6 flex-wrap">
   {/* Company Section */}
   <div className="flex flex-col mr-12">
     <p className="font-satoshi h-[18px] w-[88px] text-[14px] font-medium">
       Company
     </p>
     <ul className="list-none font-satoshi text-[14px] font-normal h-[112px] w-[91px] text-gray-500 mt-2 leading-7">
       <li>About</li>
       <li>Features</li>
       <li>Works</li>
       <li>Career</li>
     </ul>
   </div>
 
   {/* Help Section */}
   <div className="flex flex-col mr-12">
     <p className="font-satoshi h-[18px] w-[88px] text-[14px] font-medium">
       Help
     </p>
     <ul className="list-none font-satoshi text-[14px] font-normal h-[112px] w-[131px] text-gray-500 mt-2 leading-7">
       <li>Customer Support</li>
       <li>Delivery Detail</li>
       <li>Terms & Conditions</li>
       <li>Privacy Policy</li>
     </ul>
   </div>
 
   {/* FAQ Section */}
   <div className="flex flex-col mr-12 mt-6">
     <p className="font-satoshi h-[18px] w-[88px] text-[14px] font-medium">
       FAQ
     </p>
     <ul className="list-none font-satoshi text-[14px] font-normal h-[112px] w-[91px] text-gray-500 mt-2 leading-7">
       <li>Account</li>
       <li>Manage Deliveries</li>
       <li>Orders</li>
       <li>Payment</li>
     </ul>
   </div>
 
   {/* Resources Section */}
   <div className="flex flex-col mt-6">
     <p className="font-satoshi h-[18px] w-[88px] text-[14px] font-medium mr-24">
       Resources
     </p>
     <ul className="list-none font-satoshi text-[14px] font-normal h-[112px] w-[131px] text-gray-500 mt-2 leading-7">
       <li>Free eBook</li>
       <li>Development Tutorial</li>
       <li>How to - Blog</li>
       <li>YouTube Playlist</li>
     </ul>
   </div>
 </div>
 

 
 
       
     </div>
 
     </ScrollAnimation>
 {/* Desktop */}
 
 <ScrollAnimation>
 <div className="lg:flex hidden flex-wrap justify-between items-start mr-12 mt-12 ml-10 lg:-mt-[400px]">
   <ul className="  font-satoshi text-[14px] font-normal text-gray-500 w-[91px] leading-7">
     <li className="text-[35px] text-black font-bold ">SHOP.CO</li>
     <li className="w-[260px] mt-4">We have clothes that suit your style and which you are proud to wear. From women to men.</li>
     <li className="mt-2 ml-2">
       <Image src={"/dsocial.png"} height={28} width={148} className="w-96 h-[28px]"  alt="social" />
     </li>
   </ul>
 
   {/* Company Section */}
   <div className="flex flex-col w-auto">
     <p className="font-satoshi text-[16px] font-medium">Company</p>
     <ul className="list-none font-satoshi text-[16px] font-normal text-gray-500 mt-2 leading-8">
       <li>About</li>
       <li>Features</li>
       <li>Works</li>
       <li>Career</li>
     </ul>
   </div>
 
   {/* Help Section */}
   <div className="flex flex-col w-auto">
     <p className="font-satoshi text-[16px] font-medium">Help</p>
     <ul className="list-none font-satoshi text-[16px] font-normal text-gray-500 mt-2 leading-8">
       <li>Customer Support</li>
       <li>Delivery Detail</li>
       <li>Terms & Conditions</li>
       <li>Privacy Policy</li>
     </ul>
   </div>
 
   {/* FAQ Section */}
   <div className="flex flex-col w-auto ">
     <p className="font-satoshi text-[16px] font-medium">FAQ</p>
     <ul className="list-none font-satoshi text-[16px] font-normal text-gray-500 mt-2 leading-8">
       <li>Account</li>
       <li>Manage Deliveries</li>
       <li>Orders</li>
       <li>Payment</li>
     </ul>
   </div>
 
   {/* Resources Section */}
   <div className="flex flex-col w-auto ">
     <p className="font-satoshi text-[16px] font-medium">Resources</p>
     <ul className="list-none font-satoshi text-[16px] font-normal text-gray-500 mt-2 leading-8">
       <li>Free eBook</li>
       <li>Development Tutorial</li>
       <li>How to - Blog</li>
       <li>YouTube Playlist</li>
     </ul>
   </div>
 </div>
 {/* Desktop */}
 
 
     <div className="w-[358px] lg:ml-12 lg:w-[1240px]  border-[1px] flex justify-center items-center mt-16 ml-3">
       <hr />
     </div>
 
 <div className="lg:flex lg:justify-between">
   <p className="lg:ml-12 text-center font-satoshi font-normal text-gray-400 mt-4 text-[14px] ">
   Shop.co © 2000-2021, All rights reserved
   </p>
 
 <div className="lg:flex lg:justify-end lg:items-end flex justify-center items-center mt-4 lg:mr-36">
 <Image src={"/Vfooter.png"} height={25} width={240} alt="social" ></Image>
 
 </div>
 </div>
 </ScrollAnimation>
 
 



        </div>
    )
}