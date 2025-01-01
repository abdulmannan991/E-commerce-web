import Image from "next/image"
import Link from "next/link"

export default function TopSelling(){
return(

    <div>
        
        <div>
          <p className="font-integral text-[32px] lg:text-[48px] font-bold text-center mt-6 ">
          Top Selling
          </p>
        

          <div className=" flex flex-wrap justify-center items-center   space-x-4  ">
<div className="flex justify-center  flex-wrap items-center">

      
        

 </div>

 <div className="">


<Link href={"/Category"}>

<Image src={"/vertical.png"} width={198} height={298} alt={"menu"} className="lg:-ml-4 mt-4 lg:h-[248px] lg:w-[295px] rounded-[12px]  "></Image>

</Link>

    <p className="lg:text-[20px]  text-[16px] font-bold font-satoshi lg:-ml-4">
    Vertical Striped Shirt
      </p>
<Image src={"/Tstar.png"} width={106} height={16} alt={"menu"} className="lg:-ml-4  "></Image>

<div className="flex font-satoshi font-bold text-xl  mt-1 lg:-ml-4">

<p className="    ">$212</p>
<p className=" ml-2  text-gray-400 line-through">$235</p>
        <p className="h-[20px] w-[40px] rounded-2xl bg-red mt-1 ml-2 text-xs  text-rose-400 text-center">-20%</p>
        
 

</div>
</div>

        
        <div className="">

      

<Link href={"/Category"}>

        <Image src={"/dcourage.png"} width={198} height={298} alt={"menu"} className="lg:h-[248px] lg:w-[295px] mt-4 rounded-[12px]  "></Image>

        </Link>

            <p className="lg:text-[20px]  text-[16px] font-bold font-satoshi">
            Courage Graphic T-short
              </p>
        <Image src={"/d35.png"} width={106} height={16} alt={"menu"} className="  "></Image>

        <div className="flex font-satoshi font-bold text-xl  mt-1 ">
        
        <p className="    ">$145</p>
          
       

        </div>
        </div>

        
        <div className="">


<Link href={"/Category"}>

        <Image src={"/dlo.png"} width={198} height={298} alt={"menu"} className="lg:h-[248px] lg:w-[295px] ml-4   mt-4"></Image>
        </Link>


            <p className="lg:text-[20px]  text-[16px] font-bold font-satoshi -ml-0">
            LOOSE FIT BERMUDA SHORTS

              </p>
        <Image src={"/Tstar.png"} width={106} height={16} alt={"menu"} className=" smMax:-ml-0 "></Image>

        <div className="flex font-satoshi font-bold text-xl  mt-1 ">
        
        <p className="  -ml-0">$80</p>
          
       

        </div>
        </div>


        
        <div className="">
        <Image src={"/C1.png"} width={172} height={174} alt={"menu"} className=" hidden"></Image>
<Link href={"/Category"}>

        <Image src={"/dfad.png"} width={198} height={298} alt={"menu"} className="lg:h-[248px] lg:w-[295px] -ml-0  mt-4"></Image>

</Link>
            <p className="lg:text-[20px]  text-[16px] font-bold font-satoshi -ml-0">
            FADED SKINNY JEANS

              </p>
        <Image src={"/Tstar.png"} width={106} height={16} alt={"menu"} className="-ml-0  "></Image>

        <div className="flex font-satoshi font-bold text-xl  mt-1 ">
         
        <p className="  -ml-0">$210</p>
          
          

        </div>
        </div>
        

        
        
        </div>

 

{/*         
            <div className="flex space-x-4 p-4 lg:gap-12 lg:flex hidden lg:block">
            <Image src={"/dv.png"} width={295} height={298} alt={"menu"} className=" mt-4"></Image>
        <Image src={"/dcourage.png"} width={295} height={298} alt={"menu"} className=" mt-4"></Image>
        <Image src={"/dlo.png"} width={295} height={298} alt={"menu"} className=" mt-4"></Image>
        <Image src={"/dfad.png"} width={295} height={298} alt={"menu"} className=" mt-4"></Image>
              
            </div>
            <div className="flex gap-x-16 lg:gap-52">
            <p className="ml-4  text-sm font-satoshi font-bold ">
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
            
            </div> */}

            {/* Lg : hidden sm visible */}
            <div className="flex lg:gap-48 lg:hidden">
              
            {/* <Image  src={"/Vs.png"} width={100} height={100} alt={"menu"} className=" lg:mt-4 ml-4"></Image>
            
        <Image src={"/Cc.png"} width={100} height={100} alt={"menu"} className=" lg:mt-4 ml-28"></Image> */}
        <Image  src={"/Vs.png"} width={100} height={100} alt={"menu"} className=" mt-4 ml-4 hidden lg:block"></Image>
        <Image src={"/Cc.png"} width={100} height={100} alt={"menu"} className=" mt-4 ml-28 hidden lg:block"></Image>
        
        </div>
        {/* Lg : hidden */}
        {/* <div className="flex font-satoshi font-bold text-xl mt-2 lg:hidden">
       
        
        <p className="   ml-4 ">$212</p>
          
          <p className="  ml-2 text-gray-400 line-through">$235</p>
        <p className="h-[20px] w-[40px] rounded-2xl bg-red  ml-2 text-xs  text-rose-400 text-center">-20%</p>
          <p className="  ml-[70px] lg:ml-[270px]">$145</p>
          <p className="  ml-[270px] hidden lg:block">$80</p>
          <p className="  ml-[370px] hidden lg:block">$210</p>
        </div>
        
        <div className="flex justify-center items-center">
        <button className="lg:h-[52px] lg:w-[218px] h-[46px] w-[358px] rounded-[62px] bg-white border-[1px] font-satoshi font-medium flex justify-center items-center mt-4">
          <p>
            View all
          </p>
        </button>
        </div>
         */}
        </div>
        <div className="flex justify-center items-center mt-6 lg:mt-0">
  <button className="smMax:h-[46px] smMax:w-[250px] h-[46px] w-[358px] lg:h-[52px] lg:w-[218px] rounded-[62px] bg-white border-[1px] border-transparent font-satoshi font-medium flex justify-center items-center mt-4 relative overflow-hidden group transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[#ff5f6d]">
    
    {/* Gradient Background Animation */}
    <span className="absolute inset-0 bg-gradient-to-r bg-white border-[1px] rounded-[62px] border-gray-500 opacity-40 group-hover:opacity-100 group-hover:bg-gradient-to-r group-hover:from-[#ff5f6d] group-hover:to-[#ffc371] transition-all duration-700 ease-in-out"></span>

    {/* Border Animation */}
    <span className="absolute inset-0 border-[3px] border-transparent group-hover:border-[#ff5f6d] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-in-out"></span>

    {/* Animated Text */}<p className="relative text-gray-800 text-lg font-semibold transition-all duration-500 ease-in-out group-hover:text-[#000000] group-hover:tracking-wide group-hover:drop-shadow-[0_0_12px_rgba(255,99,71,0.8)]">

      View all
    </p>
  </button>
</div>

      
        
    </div>
)
}