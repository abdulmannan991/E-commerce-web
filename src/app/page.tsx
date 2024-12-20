import Image from "next/image";

export default function Home() {
  return (
   <div >
    <div className="h-[853px] w-[390px] flex  mt-2 "  style={{background: "#F2F0F1"} }>

  <div>
     <p className="font-integral font-bold leading-[34px] text-[30px] ml-4  mt-6">
   FIND CLOTHES THAT MATCHES YOUR STYLE
    </p> 

    <p className="ml-4"  style={{color:": #00000099"}}>

    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.

    </p>

   <div className="text-center">
   <button className="bg-black text-white text-center py-2 px-6 rounded-3xl mx-auto mt-8 w-[350px]">
  Shop Now
</button>
   </div>

<div className="">
  <p className="ml-20 mt-4 font-satoshi text-[24px] text-black" >200+</p>

  <Image src={"/Line.png"} width={2} height={2} alt={"menu"} className=" -mt-8 ml-48"></Image>
  <p className="ml-56 -mt-14 font-satoshi text-[24px] text-black " >2,000+</p>
  <p className="ml-20 -mt-2 font-satoshi text-[12px]" style={{color:": #00000099"}} >International Brands</p>

  <p className="ml-56 -mt-4 font-satoshi text-[12px] " style={{color:": #00000099"}} >High-Quality Products</p>

  <Image src={"/hero1.png"} width={390} height={448} alt={"menu"} className=""></Image>
  
</div>

<div className="w-[390px] h-[146px] bg-black">

<div className="flex justify-around">
<Image src={"/Versca.png"} width={116} height={23} alt={"menu"} className=" mt-4"></Image>
<Image src={"/zara.png"} width={63} height={26} alt={"menu"} className=" mt-4"></Image>
<Image src={"/gucci.png"} width={109} height={25} alt={"menu"} className=" mt-4 mr-4"></Image>

</div>
<div className="flex justify-around">
<Image src={"/prada.png"} width={127} height={21} alt={"menu"} className=" mt-4"></Image>
<Image src={"/Calvin.png"} width={134} height={21} alt={"menu"} className=" mt-4"></Image>
</div>
</div>


<div>
  <p className="font-integral text-[32px] font-bold text-center mt-6 ">
  NEW ARRIVALS
  </p>

  
    <div className="flex space-x-4 p-4">
<Image src={"/blackT-shirt.png"} width={198} height={200} alt={"menu"} className=" mt-4"></Image>
<Image src={"/Skinny.png"} width={198} height={200} alt={"menu"} className=" mt-4"></Image>
      
    </div>
    <div className="flex space-x-5">
      <p className="ml-4 text-sm font-satoshi font-bold ">
      T-SHIRT WITH TAPE DETAILS
      </p>

      
      <p className=" text-sm font-satoshi font-bold ">
      SKINNY FIT JEANS
      </p>
    
    </div>
    <div className="flex ">
<Image  src={"/Tstar.png"} width={100} height={100} alt={"menu"} className=" mt-4 ml-4"></Image>
<Image src={"/Sstar.png"} width={100} height={100} alt={"menu"} className=" mt-4 ml-28"></Image>
</div>

<div className="flex font-satoshi font-bold text-xl mt-2 ">

  <p className=" mt-4 ml-4 ">$120</p>
  <p className=" mt-4 ml-[169px]">$240</p>
  <p className=" mt-4 ml-2 text-gray-400 line-through">$260</p>
<p className="h-[20px] w-[40px] rounded-2xl bg-red mt-4 ml-2 text-xs  text-rose-400 text-center">-20%</p>

</div>

<div className="flex justify-center items-center">
<button className="h-[46px] w-[358px] rounded-[62px] bg-white border-[1px] font-satoshi font-medium flex justify-center items-center mt-4">
  <p>
    View all
  </p>
</button>
</div>

<div className="flex justify-center items-center">
<div className=" w-[358px] border-[1px]  mt-24 ">
<hr />
</div>
</div>


{/* Top selling items */}


<div>
  <p className="font-integral text-[32px] font-bold text-center mt-6 ">
  Top Selling
  </p>

  
    <div className="flex space-x-4 p-4">
<Image src={"/Vertical.png"} width={198} height={200} alt={"menu"} className=" mt-4"></Image>
<Image src={"/Courage.png"} width={198} height={200} alt={"menu"} className=" mt-4"></Image>
      
    </div>
    <div className="flex gap-x-16">
      <p className="ml-4 text-sm font-satoshi font-bold ">
      Vertical Striped Shirt
      </p>

      
      <p className=" text-sm font-satoshi font-bold ">
      Courage Graphic T-short
      </p>
    
    </div>
    <div className="flex ">
<Image  src={"/Vs.png"} width={100} height={100} alt={"menu"} className=" mt-4 ml-4"></Image>
<Image src={"/Cc.png"} width={100} height={100} alt={"menu"} className=" mt-4 ml-28"></Image>
</div>

<div className="flex font-satoshi font-bold text-xl mt-2 ">

  <p className=" mt-4 ml-4 ">$212</p>
  
  <p className=" mt-4 ml-2 text-gray-400 line-through">$235</p>
<p className="h-[20px] w-[40px] rounded-2xl bg-red mt-4 ml-2 text-xs  text-rose-400 text-center">-20%</p>
  <p className=" mt-4 ml-[70px]">$145</p>

</div>

<div className="flex justify-center items-center">
<button className="h-[46px] w-[358px] rounded-[62px] bg-white border-[1px] font-satoshi font-medium flex justify-center items-center mt-4">
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
<button className="h-[42px] w-[311px] rounded-[62px] bg-white border-[1px] font-satoshi font-medium flex justify-center items-center mt-4">
  <p>
    View all
  </p>
</button>

<button className="h-[42px] w-[311px] rounded-[62px] bg-white border-[1px] font-satoshi font-medium flex justify-center items-center mt-4">
  <p>
    View all
  </p>
</button>
</div>



</div>


</div>

    </div>


  <br /><br /><br /><br />
</div>


  </div>   
   
    </div>
   
   </div>
  );
}
