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

  <br /><br /><br /><br />
</div>

  </div>   
   
    </div>
   
   </div>
  );
}
