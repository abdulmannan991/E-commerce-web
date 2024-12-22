import Image from "next/image";
import NewArrival from "./component/New_arrival";
import TopSelling from "./component/top_selling";
import Footer from "./component/Footer";
import Browse from "./component/Browse";
import Customer from "./component/Customer";

export default function Home() {
  return (
   <div className="">
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
<div className="w-[390px] h-[146px] -mt-60 lg:mt-0  bg-black lg:w-[1440px] lg:h-[122px]  ">

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

{/* New arrival items */}

<NewArrival/>

{/* Top selling items */}
<TopSelling/>


<Browse/>

{/* Our Home */}

<Customer/>

{/* Stay upto date */}
    <div className="flex justify-center items-center mt-10">
<div className=" flex justify-center h-[293px] w-[358px] bg-black rounded-[20px] lg:h-[180px] lg:w-[1240px]">

<div className=" font-integral font-bold text-white text-[32px] mt-6 lg:flex lg:justify-start lg:items-start gap-2">
<p className="">
STAY UPTO DATE 
</p>
<span className="-mt-2 block lg:hidden">
  About Our
</span>

<span className="  hidden lg:block">
  About 
</span>

<span className="-mt-2 block lg:hidden ">
  Latest Offers
</span>

<p className="">
<span className="  hidden lg:block ">
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

    <Footer/>

  <br /><br />
</div>


  </div>   
   
    </div>
   
  );
}
