import Image from "next/image"
export default function NewArrival(){

    return(
        <div>
          
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
              <p className="ml-4 lg:ml-14 -mt-8 text-sm font-satoshi font-bold lg:mt-2">
                T-SHIRT WITH TAPE DETAILS
                </p>
          
                <div className="lg:flex gap-x-48">
                <p className=" text-sm font-satoshi font-bold -mt-8 lg:mt-2">
                SKINNY FIT JEANS
                </p>
          
               <div className="lg:flex gap-x-40">
               <p className="ml-4 text-sm font-satoshi font-bold hidden lg:block lg:space-x-4">
               CHECKERED SHIRT
                </p>
          
                
                <p className="ml-14 text-sm font-satoshi font-bold hidden lg:block">
                SLEEVE STRIPED T-SHIRT
                </p>
               </div>
               </div>
              
              </div>
              <div className="flex  lg:flex  lg:justify-start  lg:gap-32">
              <Image  src={"/Tstar.png"} width={100} height={100} alt={"menu"} className="lg:mt-4  ml-4 lg:-ml-32"></Image>
              <Image src={"/Sstar.png"} width={100} height={100} alt={"menu"} className="lg:mt-4  ml-28 "></Image>
              <Image  src={"/Tstar.png"} width={100} height={100} alt={"menu"} className="hidden lg:block mt-4 ml-4 "></Image>
          <Image src={"/Tstar.png"} width={100} height={100} alt={"menu"} className="hidden lg:block mt-4 ml-28"></Image>
          <Image src={"/Tstar.png"} width={100} height={100} alt={"menu"} className="hidden lg:block mt-4 ml-28"></Image>
          </div>
          
          <div className="flex font-satoshi font-bold text-xl mt-2 lg:hidden">
          
            <p className="  ml-4 ">$120</p>
            <p className="  ml-[169px]">$240</p>
            <p className="  ml-2 text-gray-400 line-through">$260</p>
          <p className="h-[20px] w-[40px] rounded-2xl bg-red  ml-2 text-xs  text-rose-400 text-center">-20%</p>
          
          </div>
          
          <div className="flex justify-center items-center mt-6 lg:mt-0">
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
          
            
        </div>
        </div>
    )
}