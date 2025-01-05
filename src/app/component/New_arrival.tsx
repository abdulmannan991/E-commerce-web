import Image from "next/image"
import Link from "next/link"
import ScrollAnimation from "../component/Scroll_animation";
export default function NewArrival(){

  
    return(
       
       <div className="">
        <ScrollAnimation>
          <div className="">
            <p className="smMax:mt-20 mt-20 font-integral text-[32px] font-bold text-center mt-6 lg:text-[48px]">
            NEW ARRIVALS
            </p>
          
            
          
          {/* Desktop */}
          

<div className=" flex flex-wrap justify-center items-center   space-x-4  ">
<div className="flex justify-center  flex-wrap items-center">

      
        

 </div>

 <div className="">


<Link href={"/Category"}>

<Image src={"/blackT-shirt.png"} width={198} height={298} alt={"menu"} className="lg:-ml-4 mt-4 lg:h-[248px] lg:w-[295px] rounded-[12px]  "></Image>

</Link>

    <p className="lg:text-[16px]  text-[16px] font-bold font-satoshi lg:-ml-4">
    T-SHIRT WITH TAPE DETAILS
      </p>
<Image src={"/Tstar.png"} width={106} height={16} alt={"menu"} className=" lg:-ml-4 "></Image>

<div className="flex font-satoshi font-bold text-xl  mt-1 lg:-ml-4">

<p className="    ">$120</p>
  
 

</div>
</div>

        
        <div className="">

      

<Link href={"/Category"}>

        <Image src={"/ds.png"} width={198} height={298} alt={"menu"} className=" mt-4 rounded-[12px] lg:h-[248px] lg:w-[295px] "></Image>

        </Link>

            <p className="lg:text-[20px]  text-[16px] font-bold font-satoshi">
            SKINNY FIT JEANS
              </p>
        <Image src={"/d35.png"} width={106} height={16} alt={"menu"} className="  "></Image>

        <div className="flex font-satoshi font-bold text-xl  mt-1 ">
        
        <p className="    ">$240</p>
          
          <p className=" ml-2  text-gray-400 line-through">$260</p>
        <p className="h-[20px] w-[40px] rounded-2xl bg-red mt-1 ml-2 text-xs  text-rose-400 text-center">-20%</p>
       

        </div>
        </div>

        
        <div className="">


<Link href={"/Category"}>

        <Image src={"/dc.png"} width={198} height={298} alt={"menu"} className=" lg:h-[248px] lg:w-[295px]  mt-4"></Image>
        </Link>


            <p className="lg:text-[20px]  text-[16px] font-bold font-satoshi -ml-0">
            CHECKERED SHIRT

              </p>
        <Image src={"/Tstar.png"} width={106} height={16} alt={"menu"} className=" smMax:-ml-0 "></Image>

        <div className="flex font-satoshi font-bold text-xl  mt-1 ">
        
        <p className="  -ml-0">$180</p>
          
       

        </div>
        </div>


        
        <div className="">
        <Image src={"/C1.png"} width={172} height={174} alt={"menu"} className=" hidden"></Image>
<Link href={"/Category"}>

        <Image src={"/dsleeve.png"} width={198} height={298} alt={"menu"} className="lg:h-[248px] lg:w-[295px] -ml-0  mt-4"></Image>

</Link>
            <p className="lg:text-[20px]  text-[16px] font-bold font-satoshi -ml-0">
            SLEEVE STRIPED T-SHIRT

              </p>
        <Image src={"/Tstar.png"} width={106} height={16} alt={"menu"} className="-ml-0  "></Image>

        <div className="flex font-satoshi font-bold text-xl  mt-1 ">
         
        <p className="  -ml-0">$130</p>
          
          <p className="-ml-0  text-gray-400 line-through">$160</p>
        <p className="h-[20px] w-[40px] rounded-2xl bg-red -ml-0 mt-1  text-xs  text-rose-400 text-center">-30%</p>
       

        </div>
        </div>
        

        
        
        </div>

 
{/* Desktop */}

{/* Mob */}
 
          
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

          
          <div className="flex justify-center items-center">
          <div className=" w-[358px] lg:w-[1240px] border-[1px]  mt-24 ">
          <hr />
          </div>
          </div>
          
            
        </div>
        </ScrollAnimation>
        </div>
    )
}