import Image from "next/image";

export default function Home() {
  return (
   <div >
    <div className="h-[853px] w-[390px] flex  mt-2 lg:h-[663px] lg:mt-10 lg:w-[1440px]"  style={{background: "#F2F0F1"} }>

  <div>
  <p className="font-integral font-bold leading-[34px] text-[30px] ml-4  mt-6 lg:hidden">
   FIND CLOTHES THAT MATCHES YOUR STYLE
    </p> 
{/* Desktop */}
    <p className="lg:relative lg:z-10 font-integral font-bold leading-[34px] text-[30px] ml-4  mt-6 hidden lg:block lg:text-[64px] lg:ml-[100px] lg:mt-20 lg:leading-[64px]">
   <span>FIND CLOTHES </span>
   <span className="lg:block">THAT MATCHES  </span>
   <span className="lg:block">YOUR STYLE</span>
    </p> 

    <p className="lg:relative lg:z-10 ml-4 lg:text-[16px] lg:ml-[110px]"  style={{color:": #00000099"}}>

    Browse through our diverse range of meticulously crafted garments, designed 
    
    <span className="lg:block">to bring out your individuality and cater to your sense of style.</span>
    </p>

   <div className="lg:relative lg:z-10 text-center lg:mr-[1060px]">
   <button className="bg-black text-white text-center py-2 px-6 rounded-3xl mx-auto mt-8 w-[350px] lg:w-44 lg:h-12">
  Shop Now
</button>
   </div>

<div className="">
  <p className="ml-20 mt-4 font-satoshi text-[24px] text-black" >200+</p>

  <Image src={"/Line.png"} width={2} height={2} alt={"menu"} className=" -mt-8 ml-48"></Image>
  <p className="ml-56 -mt-14 font-satoshi text-[24px] text-black " >2,000+</p>
  <p className="ml-20 -mt-2 font-satoshi text-[12px]" style={{color:": #00000099"}} >International Brands</p>

  <p className="ml-56 -mt-4 font-satoshi text-[12px] " style={{color:": #00000099"}} >High-Quality Products</p>

  <Image src={"/hero1.png"} width={390} height={448} alt={"menu"} className="lg:hidden"></Image>
  <Image src={"/desh.png"} width={1440} height={663} alt={"menu"} className="hidden lg:block -mt-[450px]"></Image>
  <Image src={"/dsright.png"} width={104} height={104} alt={"menu"} className="hidden lg:block lg:ml-[1255px] -mt-[550px]"></Image>
  <Image src={"/dsleft.png"} width={56} height={56} alt={"menu"} className=" hidden lg:block lg:ml-[750px] mt-[40px]"></Image>

  
</div>

<br /><br /><br /><br /><br /><br /><br /><br /><br />
<div className="w-[390px] h-[146px] bg-black lg:w-[1440px] lg:h-[122px]  ">

<div className="flex justify-around ">
<Image src={"/Versca.png"} width={116} height={23} alt={"menu"} className=" mt-16 "></Image>
<Image src={"/zara.png"} width={63} height={26} alt={"menu"} className=" mt-16"></Image>
<Image src={"/gucci.png"} width={109} height={25} alt={"menu"} className=" mt-16 mr-4"></Image>
<Image src={"/prada.png"} width={127} height={21} alt={"menu"} className=" mt-16 hidden lg:block"></Image>
<Image src={"/Calvin.png"} width={134} height={21} alt={"menu"} className=" mt-16 hidden lg:block"></Image>

</div>
<div className="flex justify-around lg:hidden">
<Image src={"/prada.png"} width={127} height={21} alt={"menu"} className=" mt-4 "></Image>
<Image src={"/Calvin.png"} width={134} height={21} alt={"menu"} className=" mt-4"></Image>
</div>
</div>


<div>
  <p className="font-integral text-[32px] font-bold text-center mt-6 lg:text-[48px]">
  NEW ARRIVALS
  </p>

  
  <div className="flex space-x-4 p-4  lg:hidden">
<Image src={"/blackT-shirt.png"} width={198} height={200} alt={"menu"} className=" mt-4"></Image>
<Image src={"/Skinny.png"} width={198} height={200} alt={"menu"} className=" mt-4"></Image>

    </div>

{/* Desktop */}
    <div className="flex space-x-4 p-4 lg:flex lg:justify-evenly">
<Image src={"/blackT-shirt.png"} width={295} height={298} alt={"menu"} className="hidden lg:block mt-4"></Image>
<Image src={"/ds.png"} width={295} height={298} alt={"menu"} className="hidden lg:block mt-4"></Image>
<Image src={"/dc.png"} width={295} height={298} alt={"menu"} className="hidden lg:block mt-4"></Image>
<Image src={"/dsleeve.png"} width={295} height={298} alt={"menu"} className="hidden lg:block mt-4"></Image>
      
    </div>
    <div className="flex space-x-5 lg:flex lg:justify-start lg:gap-36 ">
    <p className="ml-4 lg:ml-14 text-sm font-satoshi font-bold ">
      T-SHIRT WITH TAPE DETAILS
      </p>

      <div className="lg:flex gap-x-48">
      <p className=" text-sm font-satoshi font-bold ">
      SKINNY FIT JEANS
      </p>

     <div className="lg:flex gap-x-40">
     <p className="ml-4 text-sm font-satoshi font-bold hidden lg:block lg:space-x-4">
      T-SHIRT WITH TAPE DETAILS
      </p>

      
      <p className=" text-sm font-satoshi font-bold hidden lg:block">
      SKINNY FIT JEANS
      </p>
     </div>
     </div>
    
    </div>
    <div className="flex  lg:flex  lg:justify-start  lg:gap-32">
    <Image  src={"/Tstar.png"} width={100} height={100} alt={"menu"} className=" mt-4 ml-4 lg:-ml-32"></Image>
    <Image src={"/Sstar.png"} width={100} height={100} alt={"menu"} className=" mt-4 ml-28 "></Image>
    <Image  src={"/Tstar.png"} width={100} height={100} alt={"menu"} className="hidden lg:block mt-4 ml-4 "></Image>
<Image src={"/Tstar.png"} width={100} height={100} alt={"menu"} className="hidden lg:block mt-4 ml-28"></Image>
<Image src={"/Tstar.png"} width={100} height={100} alt={"menu"} className="hidden lg:block mt-4 ml-28"></Image>
</div>

<div className="flex font-satoshi font-bold text-xl mt-2 lg:hidden">

  <p className=" mt-4 ml-4 ">$120</p>
  <p className=" mt-4 ml-[169px]">$240</p>
  <p className=" mt-4 ml-2 text-gray-400 line-through">$260</p>
<p className="h-[20px] w-[40px] rounded-2xl bg-red mt-4 ml-2 text-xs  text-rose-400 text-center">-20%</p>

</div>

<div className="flex justify-center items-center">
<button className="h-[46px] w-[358px] lg:h-[52px] lg:w-[218px] rounded-[62px] bg-white border-[1px] font-satoshi font-medium flex justify-center items-center mt-4">
  <p>
    View all
  </p>
</button>
</div>

<div className="flex justify-center items-center">
<div className=" w-[358px] lg:w-[1240px] border-[1px]  mt-24 ">
<hr />
</div>
</div>


{/* Top selling items */}


<div>
  <p className="font-integral text-[32px] lg:text-[48px] font-bold text-center mt-6 ">
  Top Selling
  </p>

  
  <div className="flex space-x-4 p-4 lg:gap-36 lg:hidden">
    <Image src={"/Vertical.png"} width={198} height={200} alt={"menu"} className=" mt-4"></Image>
<Image src={"/Courage.png"} width={198} height={200} alt={"menu"} className=" mt-4"></Image>
<Image src={"/dlo.png"} width={198} height={200} alt={"menu"} className=" mt-4"></Image>
<Image src={"/dfad.png"} width={198} height={200} alt={"menu"} className=" mt-4"></Image>
      
    </div>
    {/* Desktop */}

    <div className="flex space-x-4 p-4 lg:gap-12 lg:flex hidden lg:block">
    <Image src={"/dv.png"} width={295} height={298} alt={"menu"} className=" mt-4"></Image>
<Image src={"/dcourage.png"} width={295} height={298} alt={"menu"} className=" mt-4"></Image>
<Image src={"/dlo.png"} width={295} height={298} alt={"menu"} className=" mt-4"></Image>
<Image src={"/dfad.png"} width={295} height={298} alt={"menu"} className=" mt-4"></Image>
      
    </div>
    <div className="flex gap-x-16 lg:gap-52">
    <p className="ml-4 text-sm font-satoshi font-bold ">
      Vertical Striped Shirt
      </p>

      
      <p className=" text-sm font-satoshi font-bold ">
      Courage Graphic T-short
      </p>

      <p className="ml-4 text-sm font-satoshi font-bold hidden lg:block">
      Vertical Striped Shirt
      </p>

      
      <p className=" text-sm font-satoshi font-bold hidden lg:block">
      Courage Graphic T-short
      </p>
    
    </div>
    <div className="flex lg:gap-48">
    <Image  src={"/Vs.png"} width={100} height={100} alt={"menu"} className=" mt-4 ml-4"></Image>
<Image src={"/Cc.png"} width={100} height={100} alt={"menu"} className=" mt-4 ml-28"></Image>
<Image  src={"/Vs.png"} width={100} height={100} alt={"menu"} className=" mt-4 ml-4 hidden lg:block"></Image>
<Image src={"/Cc.png"} width={100} height={100} alt={"menu"} className=" mt-4 ml-28 hidden lg:block"></Image>

</div>

<div className="flex font-satoshi font-bold text-xl mt-2 ">

<p className=" mt-4 ml-4 ">$212</p>
  
  <p className=" mt-4 ml-2 text-gray-400 line-through">$235</p>
<p className="h-[20px] w-[40px] rounded-2xl bg-red mt-4 ml-2 text-xs  text-rose-400 text-center">-20%</p>
  <p className=" mt-4 ml-[70px] lg:ml-[270px]">$145</p>
  <p className=" mt-4 ml-[270px] hidden lg:block">$80</p>
  <p className=" mt-4 ml-[370px] hidden lg:block">$210</p>
</div>

<div className="flex justify-center items-center">
<button className="lg:h-[52px] lg:w-[218px] h-[46px] w-[358px] rounded-[62px] bg-white border-[1px] font-satoshi font-medium flex justify-center items-center mt-4">
  <p>
    View all
  </p>
</button>
</div>

</div>

<div className="flex justify-center items-center mt-16">
  <div className="flex flex-col justify-start items-center h-[975px] w-[358px] rounded-[20px]" style={{ background: "#F2F0F1" }}>
    <h1 className="font-integral text-[32px] text-center mt-[48px] leading-tight font-bold">
      BROWSE BY <span className="block">Dress STYLE</span>
    </h1>
    
    <div className="space-y-4 mt-6">
    <Image src={"/Casual.png"} width={310} height={190} alt={"menu"} ></Image>
    <Image src={"/Formal.png"} width={310} height={190} alt={"menu"} ></Image>
    <Image src={"/Party.png"} width={310} height={190} alt={"menu"} ></Image>
    <Image src={"/Gym.png"} width={310} height={190} alt={"menu"} ></Image>

    </div>
  </div>
</div>


{/* Our Home */}


<div className="ml-4 font-integral text-[32px]  text-start mt-[48px] leading-tight font-bold">
      Our Happy <span className="block">Customers</span>

     <div className="flex justify-end mr-8 gap-4 -mt-8">
     <Image src={"/arrow-left.png"} width={24} height={24} alt={"menu"} ></Image>
     <Image src={"/arrow-right.png"} width={24} height={24} alt={"menu"} ></Image>
     </div>
    </div>


    <div className="flex justify-center items-center mt-10">
    <div className="flex h-[186px] w-[358px] text-white border-[1px] rounded-[20px]">
    <div className=" mt-6 space-x-1 ml-6 ">
    <span className="text-yellow-500 ">⭐</span>
    <span className="text-yellow-500 ">⭐</span>
    <span className="text-yellow-500 ">⭐</span>
    <span className="text-yellow-500 ">⭐</span>

    <div className="flex items-center space-x-2">
  <p className=" mt-2 font-satoshi text-[16px] font-bold text-black">
    Sarah M.
  </p>
  <div className="flex justify-center items-center h-5 w-5 rounded-[20px] bg-green-500">
    <p className="text-white text-xs font-bold">✔</p>
  </div>

 
</div>

<p className="font-satoshi text-[14px] font-normal text-gray-400">
  {`"Im blown away by the quality and style of the clothes
   I received from Shop.co. From casual wear to elegant dresses every piece Ive bought has exceeded my expectations.”`}
  </p>

 </div>

    </div>

    </div>


    <div className="flex justify-center items-center mt-10">
<div className=" flex justify-center h-[293px] w-[358px] bg-black rounded-[20px]">

<div className=" font-integral font-bold text-white text-[32px] mt-6">
<p className="">
STAY UPTO DATE 
</p>
<span className="-mt-2 block">
  About Our
</span>

<span className="-mt-2 block">
  Latest Offers
</span>

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

    <div>
    <p className="font-integral font-bold text-[28px] w-[160px] h-[22px] leading-6 mt-8  ml-2">SHOP.CO</p>
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

    <div className="w-[358px] border-[1px] flex justify-center items-center mt-16 ml-3">
      <hr />
    </div>

<div className="">
  <p className="text-center font-satoshi font-normal text-gray-400 mt-4 text-[14px] ">
  Shop.co © 2000-2021, All rights reserved
  </p>

<div className="flex justify-center items-center mt-4">
<Image src={"/Vfooter.png"} height={25} width={240} alt="social" ></Image>

</div>
</div>

  <br /><br />
</div>


  </div>   
   
    </div>
   
   </div>
  );
}
