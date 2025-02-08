import Image from "next/image";
import NewArrival from "./component/New_arrival";
import TopSelling from "./component/Top_selling";
import Footer from "./component/Footer";
import Browse from "./component/Browse";
import Customer from "./component/Customer";
import StayPage from "./component/Stay";


export default function Home() {

  
  return (
   <div className="overflow-x-clip  ">
    <div className= " h-[853px] hidden xl:block  flex  mt-2 xl:h-[663px] xl:mt-10  w-full"  style={{background: "#F2F0F1"} }>

  <div>
 
{/* Desktop */}
    <p className="xl:relative xl:z-10 font-integral font-bold leading-[34px] text-[30px] ml-4  mt-6 hidden xl:block xl:text-[64px] xl:ml-[100px] xl:mt-20 xl:leading-[64px]">
   <span>FIND CLOTHES </span>
   <span className="xl:block">THAT MATCHES  </span>
   <span className="xl:block">YOUR STYLE</span>
    </p> 

    <p className="xl:relative xl:z-10 ml-4 text-[14px] smMax:w-[280px] xl:text-[16px] xl:ml-[110px]"  style={{color:": #00000099"}}>

    Browse through our diverse range of meticulously crafted garments, designed 
    
    <span className="xl:block">to bring out your individuality and cater to your sense of style.</span>
    </p>

   <div className="xl:relative xl:z-10 ml-16 text-center xl:mr-[1060px] smMax:mr-8">
   <button className="bg-black text-white text-center py-2 px-6 rounded-3xl smMax:w-[250px]   mx-auto mt-8 w-[350px] xl:w-44 xl:h-12">
  Shop Now
</button>
   </div>

<div className="">
  <p className="smMax:mb-2 smMax:ml-14  smMax:text-[20px] ml-20 mt-4 font-satoshi text-[24px] text-black " >200+</p>

  <Image src={"/Line.png"} width={2} height={2} alt={"menu"} className=" -mt-8 ml-48 smMax:ml-44"></Image>
  <p className="ml-56 -mt-14 font-satoshi text-[24px] text-black smMax:text-[18px] smMax:ml-[185px]" >2,000+</p>
  <p className="ml-20 -mt-2 font-satoshi text-[12px] smMax:ml-14" style={{color:": #00000099"}} >International Brands</p>

  <p className="ml-56 -mt-4 font-satoshi text-[12px] smMax:ml-[185px]" style={{color:": #00000099"}} >High-Quality Products</p>

  <Image src={"/hero1.png"} width={390} height={448} alt={"menu"} className="xl:hidden smMax:w-[310px] "></Image>
  <Image src={"/desh.png"} width={1440} height={663} alt={"menu"} className="hidden xl:block -mt-[450px]"></Image>
  <Image src={"/dsright.png"} width={104} height={104} alt={"menu"} className="hidden xl:block xl:ml-[1255px] -mt-[550px]"></Image>
  <Image src={"/dsleft.png"} width={56} height={56} alt={"menu"} className=" hidden xl:block xl:ml-[750px] mt-[40px]"></Image>

  
</div>

<br /><br /><br /><br /><br /><br /><br /><br /><br />
<div className="w-[390px] h-[146px] smMax:  -mt-60 xl:mt-0  bg-black xl:w-[1440px] xl:h-[122px]  ">

<div className="flex justify-around smMax:flex smax:justify-around smMax:-ml-4">
<Image src={"/Versca.png"} width={116} height={23} alt={"menu"} className="smMax:w-[100px] mt-16"></Image>
<Image src={"/zara.png"} width={63} height={26} alt={"menu"} className="smMax:w-[50px] mt-16 "></Image>
<Image src={"/gucci.png"} width={109} height={25} alt={"menu"} className="smMax:w-[70px] mt-16 mr-4 smMax:mr-20"></Image>
<Image src={"/prada.png"} width={127} height={21} alt={"menu"} className=" mt-16 hidden xl:block"></Image>
<Image src={"/Calvin.png"} width={134} height={21} alt={"menu"} className=" mt-16 hidden xl:block "></Image>

</div>
<div className="flex justify-around smMax:flex smMax:-space-x-14 xl:hidden">
<Image src={"/prada.png"} width={127} height={21} alt={"menu"} className="smMax:w-[90px] smMax:-ml-12 mt-4 "></Image>
<Image src={"/Calvin.png"} width={134} height={21} alt={"menu"} className="smMax:w-[100px] smMax:-ml-8 mt-4"></Image>
</div>


</div>



{/* New arrival items */}

<NewArrival/>

{/* Top selling items */}
<TopSelling/>


<Browse/>

{/* Our Home */}

<Customer/>

<StayPage/>
    <Footer/>

  <br /><br />
</div>


  </div>   
  <div className="flex justify-center items-center xl:hidden overflow-x-clip">
  <div
    className=" flex flex-col mt-2 smMax:h-[790px]  h-[853px] xl:mt-10  w-[1028px]"
    style={{ background: "#F2F0F1" }}
  >
    <p className="space-x-2 font-integral font-bold leading-[34px] text-[36px] ml-4 mt-6">
      <span>FIND CLOTHES </span>
      <span className="xl:block">THAT </span>
      <span className="xl:block">MATCHES YOUR STYLE</span>
    </p>

    <div className=" mt-4">
    <p className="xl:relative xl:z-10 ml-4 text-[14px] xl:hidden sm:text-[16px] md:text-[20px] h-[50px] smMax:w-[280px] w-[358px] sm:w-[458px]"  style={{color:": #00000099"}}>

Browse through our diverse range of meticulously crafted garments, designed 

<span className="xl:block">to bring out your individuality and cater to your sense of style.</span>
</p>
    </div>

    <div className=" text-center  smMax:ml-8 mt-6">
   <button className="bg-black text-white   text-center py-2 px-6 rounded-3xl smMax:w-[250px]     mx-auto mt-8 h-[52px] w-[358px] ">
  Shop Now
</button>
   </div>

   <div className="mx-auto">
  <p className="smMax:mb-2 smMax:ml-14   smMax:text-[20px] ml-20 mt-4 font-satoshi text-[24px] text-black md:ml-40" >200+</p>

  <Image src={"/Line.png"} width={2} height={2} alt={"menu"} className=" -mt-8 ml-48 smMax:ml-44 md:ml-[280px]"></Image>
  <p className="ml-56 -mt-14 font-satoshi text-[24px] text-black smMax:text-[18px] smMax:ml-[185px] md:ml-[340px]" >2,000+</p>
  <p className="ml-20 -mt-2 font-satoshi text-[12px] smMax:ml-14  md:ml-40" style={{color:": #00000099"}} >International Brands</p>

  <p className="ml-56 -mt-4 font-satoshi text-[12px] smMax:ml-[185px] md:ml-[340px]" style={{color:": #00000099"}} >High-Quality Products</p>

  <Image src={"/hero1.png"} width={390} height={448} alt={"menu"} loading="eager" className="sm:hidden smMax:w-[310px] "></Image>
  
  <Image src={"/hero1.png"} width={390} height={448} alt={"menu"} className="hidden sm:block md:w-[590px] md:h-[448px]"></Image>
  
  <Image src={"/dsright.png"} width={76} height={76} alt={"menu"} className="xl:hidden smMax:-mt-80 smMax:ml-56 md:ml-[440px] md:w-36 md:-mt-[440px] md:h-32 -mt-96 ml-72"></Image>
  <Image src={"/dsleft.png"} width={44} height={44} alt={"menu"} className=" xl:hidden  smMax:ml-0 ml-4 md:w-20 "></Image>
  <Image src={"/dsright.png"} width={104} height={104} alt={"menu"} className="hidden xl:block xl:ml-[1255px] -mt-[550px]"></Image>
  <Image src={"/dsleft.png"} width={56} height={56} alt={"menu"} className=" hidden xl:block xl:ml-[750px] mt-[40px]"></Image>

  
</div>



<div className=" h-[146px] pt-6 mt-[260px]  mx-auto md:mt-[220px]  smMax:mt-[200px] w-full xl:mt-0  bg-black  ">

<div className="flex justify-around smMax:flex smax:justify-around smMax:-ml-4 md:p-9 smMax:space-x-4 smMax:p-2  ">
<Image src={"/Versca.png"} width={116} height={23} alt={"menu"} className="smMax:w-[100px] "></Image>
<Image src={"/zara.png"} width={63} height={26} alt={"menu"} className="smMax:w-[50px]  "></Image>
<Image src={"/gucci.png"} width={109} height={25} alt={"menu"} className="smMax:w-[70px]  mr-4 smMax:mr-20"></Image>
<Image src={"/prada.png"} width={127} height={21} alt={"menu"} className="  hidden md:block"></Image>
<Image src={"/Calvin.png"} width={134} height={21} alt={"menu"} className="  hidden md:block "></Image>

</div>
<div className="flex justify-around smMax:flex smMax:-space-x-14 md:hidden">
<Image src={"/prada.png"} width={127} height={21} alt={"menu"} className="smMax:w-[90px] smMax:-ml-12  "></Image>
<Image src={"/Calvin.png"} width={134} height={21} alt={"menu"} className="smMax:w-[100px] smMax:-ml-8 "></Image>
</div>



<NewArrival/>

{/* Top selling items */}
<TopSelling/>


<Browse/>

{/* Our Home */}

<div className="ml-4 font-integral text-[32px] xl:ml-28 xl:text-[48px]  text-start mt-[48px] leading-tight font-bold">
                  Our Happy <span className="block xl:inline-block">Customers</span>
            
                 <div className="flex justify-end mr-8 xl:mr-28 gap-4 -mt-8 ">
                 <Image src={"/arrow-left.png"} width={24} height={24} alt={"menu"} ></Image>
                 <Image src={"/arrow-right.png"} width={24} height={24} alt={"menu"} ></Image>
                 </div>
                </div>
            
            
            
                <div className="flex justify-center items-center mt-10 gap-4">
            
                <div className="flex h-[186px] w-[358px] mx-auto sm:w-[400px] text-white border-[1px] rounded-[20px]  ">
                <div className=" mt-6 space-x-1 ml-6 ">
                <span className="text-yellow-500 ">⭐</span>
                <span className="text-yellow-500 ">⭐</span>
                <span className="text-yellow-500 ">⭐</span>
                <span className="text-yellow-500 ">⭐</span>
                <span className="text-yellow-500 ">⭐</span>

            
                <div className="flex items-center space-x-2">
              <p className=" mt-2 font-satoshi text-[16px] xl:text-[20px] font-bold text-black">
                Sarah M.
              </p>
              <div className="flex justify-center items-center h-5 w-5 rounded-[20px] bg-green-500">
                <p className="text-white text-xs font-bold">✔</p>
              </div>
            
              
            
             
            </div>
            
            <p className="font-satoshi text-[14px] xl:text-[16px] font-normal text-gray-900">
              {`"Im blown away by the quality and style of the clothes
               I received from Shop.co. From casual wear to elegant dresses every piece Ive bought has exceeded my expectations.”`}
              </p>
            
             </div>
            
                </div>
                </div>
            



                <div className=" w-full h-[846px] mx-auto bg-lightGray xl:mt-[200px] mt-[150px]   ">

<div className="flex justify-center items-center ">
<div className="w-[358px] md:w-[458px] h-[293px] xl:w-[1240px] xl:h-[180px] lg:w-full  flex justify-center rounded-[20px] -ml-1 -mt-[100px] bg-black">
            <div className=" font-integral font-bold text-white text-[32px] mt-6 xl:flex xl:justify-start xl:items-start gap-2">
            
            <p className="hidden xl:block w-[451px] h-[94px]">STAY UPTO DATE ABOUT OUR LATEST OFFER</p>
            <p className="xl:hidden ">
            STAY UPTO DATE 
            </p>
            <span className="-mt-2 block xl:hidden">
              About Our
            </span>

            
            <span className="-mt-2 block xl:hidden ">
              Latest Offers
            </span>
            
            <p className="">
            <span className="  hidden  ">
              Our Latest Offers
            </span>
            </p>
            
            
            <div>
            
            
              
            <div className="relative w-[311px]">
              <span className="text-[16px] mt-2 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-900">
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
     
 <div className="xl:hidden mx-auto  -mt-[650px]">
     <p className="font-integral  font-bold text-[28px] w-[160px] h-[22px] leading-6 mt-8  ml-2 ">SHOP.CO</p>
       <p className="font-satoshi text-gray-900 text-[14px] mt-2 ml-2">
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
     <ul className="list-none font-satoshi text-[14px] font-normal h-[112px] w-[91px] text-gray-900 mt-2 leading-7">
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
     <ul className="list-none font-satoshi text-[14px] font-normal h-[112px] w-[131px] text-gray-900 mt-2 leading-7">
       <li>Customer Support</li>
       <li>Delivery Detail</li>
       <li>Terms & Conditions</li>
       <li>Privacy Policy</li>
     </ul>
   </div>
 
   {/* FAQ Section */}
   <div className="flex flex-col mr-12 ">
     <p className="font-satoshi h-[18px] w-[88px] text-[14px] font-medium">
       FAQ
     </p>
     <ul className="list-none font-satoshi text-[14px] font-normal h-[112px] w-[91px] text-gray-900 mt-2 leading-7">
       <li>Account</li>
       <li>Manage Deliveries</li>
       <li>Orders</li>
       <li>Payment</li>
     </ul>
   </div>
 
   {/* Resources Section */}
   <div className="flex flex-col ">
     <p className="font-satoshi h-[18px] w-[88px] text-[14px] font-medium mr-24">
       Resources
     </p>
     <ul className="list-none font-satoshi text-[14px] font-normal h-[112px] w-[131px] text-gray-900 mt-2 leading-7">
       <li>Free eBook</li>
       <li>Development Tutorial</li>
       <li>How to - Blog</li>
       <li>YouTube Playlist</li>
     </ul>
   </div>
 </div>
 </div>
 

</div>



  </div>
</div>

</div>
   
  );
}
